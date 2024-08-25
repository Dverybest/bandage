"use client";
import { dollarToNaira } from "@/utils";
import { Box, Typography, styled } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

export const ProductCard: FC<IProduct> = ({
  images,
  title,
  category,
  price,
  discountPercentage,
  id,
}) => {
  return (
    <Container href={`/shop/${id}`}>
      <ProductImage src={images[0]} />
      <Typography color={({ palette }) => palette.text.primary} variant="h5">
        {title}
      </Typography>
      <Typography
        color={({ palette }) => palette.text.secondary}
        variant={"caption"}
        whiteSpace={"nowrap"}
      >
        {category}
      </Typography>
      <Box display={"flex"} columnGap={"5px"}>
        <Typography variant="h5" color={({ palette }) => palette.text.disabled}>
          ₦{dollarToNaira(price)}
        </Typography>
        <Typography
          variant="h5"
          color={({ palette }) => palette.secondary.main}
        >
          ₦{dollarToNaira(Number(price - discountPercentage)).toFixed(2)}
        </Typography>
      </Box>
    </Container>
  );
};

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  width: calc(20% - 30px);
  align-items: center;
  text-align: center;
  text-decoration: none;
  @media screen and (max-width: 1024px) {
    width: calc(25% - 30px);
  }
  @media screen and (max-width: 800px) {
    width: calc(33% - 30px);
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 54px);
    justify-content: center;
  }
`;

const ProductImage = styled("img")`
  height: 283px;
  width: 100%;
  object-fit: cover;
`;
