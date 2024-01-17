"use client";
import { useGetProductsQuery } from "@/lib";
import { useMedia } from "@/utils";
import { Box, Button } from "@mui/material";
import { FC, useEffect, useMemo, useState } from "react";
import { ProductCard } from ".";
import { Loader } from "./Loader";

export const ProductList: FC<{ hideLoadMore?: boolean }> = ({
  hideLoadMore,
}) => {
  const { isMobile } = useMedia();
  const limit = useMemo(() => (isMobile ? 5 : 10), [isMobile]);
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const { data: productList, isLoading } = useGetProductsQuery({
    limit,
    skip: page * limit,
  });
  const loadMore = !hideLoadMore && products.length < (productList?.total ?? 0);
  const onLoadMoreClick = () => {
    if (loadMore) {
      setPage((page) => page + 1);
    }
  };
  useEffect(() => {
    if (productList) {
      setProducts((products) => [...products, ...productList.products]);
    }
  }, [productList]);
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
          <ProductCard key={product.id} {...product} />
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
};
