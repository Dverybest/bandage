"use client";
import { Box, BoxProps, Typography, styled } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

type IProp = {
  imageSrc: string;
  numberOfItems: number;
  productName: string;
} & BoxProps;
export const HeroItemCard: FC<IProp> = ({
  imageSrc,
  numberOfItems,
  productName,
  ...rest
}) => {
  return (
    <Box display={"flex"} flex={1} {...rest} position={"relative"}>
      <HeroItemImage src={imageSrc} />
      <DetailContainer>
        <Typography variant="h6" component={"h6"} color={"success.main"}>
          {numberOfItems} items
        </Typography>
        <Typography color={"text.primary"} variant="h2" component={"h2"}>
          {productName}
        </Typography>
        <Link href={""}>
          <Typography color={"text.primary"} variant="h6" component={"h6"}>
            Read More
          </Typography>
        </Link>
      </DetailContainer>
    </Box>
  );
};

const HeroItemImage = styled("img")`
  object-fit: cover;
  width: 100%;
  height: auto;
`;
const DetailContainer = styled("div")`
  position: absolute;
  padding: 24px;
  a {
    text-decoration: none;
  }
`;
