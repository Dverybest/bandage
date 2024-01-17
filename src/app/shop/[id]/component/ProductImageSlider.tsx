"use client";
import { Box, styled } from "@mui/material";
import { FC, ReactElement, useState } from "react";

export const ProductImageSlider: FC<{ images: string[] }> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Container>
      <MainImage src={images[selectedIndex]} />
      <Box
        display={"flex"}
        columnGap={"19px"}
        overflow={"scroll"}
        width={"90%"}
      >
        {images.reduce<ReactElement[]>((acc, current, index) => {
          return index != selectedIndex
            ? [
                ...acc,
                <OtherImage
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  src={current}
                />,
              ]
            : acc;
        }, [])}
      </Box>
    </Container>
  );
};
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 21px;
`;

const MainImage = styled("img")`
  object-fit: contain;
  height: 450px;
  width: 100%;
  max-width: 506px;
  @media (max-width: 500px) {
    height: 227px;
  }
`;
const OtherImage = styled("img")`
  width: 100px;
  height: 75px;
  object-fit: contain;
`;
