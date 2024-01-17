"use client";
import { useGetProductsQuery } from "@/lib";
import { useMedia } from "@/utils";
import { Box, Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Loader } from "./Loader";
import { ProductCard } from "./ProductCard";

export function ProductList({ hideLoadMore }: { hideLoadMore?: boolean }) {
  const { isMobile } = useMedia();
  const limit = useMemo(() => (isMobile ? 5 : 10), [isMobile]);
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const { data, isLoading } = useGetProductsQuery({
    limit,
    skip: page * limit,
  });
  const loadMore = !hideLoadMore && products.length < (data?.total ?? 0);
  const onLoadMoreClick = () => {
    if (loadMore) {
      setPage((page) => page + 1);
    }
  };
  useEffect(() => {
    if (data) {
      setProducts((products) => [...products, ...data.products]);
    }
  }, [data]);
  return (
    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        columnGap={"30px"}
        p={3}
        sx={{ justifyContent: { xs: "center", sm: "normal" } }}
        rowGap={"15px"}
      >
        {products.map((product) => (
          <ProductCard key={product.id + product.title} {...product} />
        ))}
        {isLoading &&
          Array.from({ length: 4 }, (_, index) => <Loader key={index} />)}
      </Box>
      {loadMore && (
        <Button onClick={onLoadMoreClick} variant="outlined">
          LOAD MORE PRODUCTS
        </Button>
      )}
    </Box>
  );
}
