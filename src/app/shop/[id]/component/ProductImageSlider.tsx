"use client";
import { Box, IconButton, styled } from "@mui/material";
import { FC, ReactElement, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

export const ProductImageSlider: FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Container>
      <ImageContainer>
        <MainImage src={images[selectedIndex]} alt={title} />
        <NavigateButton
          sx={{ left: 0 }}
          onClick={() =>
            setSelectedIndex((index) =>
              index > 0 ? (index - 1) % images.length : images.length - 1
            )
          }
        >
          <FaChevronLeft />
        </NavigateButton>
        <NavigateButton
          sx={{ right: 0 }}
          onClick={() =>
            setSelectedIndex((index) => (index + 1) % images.length)
          }
        >
          <FaChevronRight />
        </NavigateButton>
      </ImageContainer>
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
                  alt={title}
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
const ImageContainer = styled("div")`
  position: relative;
`;
const NavigateButton = styled(IconButton)`
  position: absolute;
  z-index: 1;
  top: 50%;
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.grey[200]};
`;
const OtherImage = styled("img")`
  width: 100px;
  height: 75px;
  object-fit: contain;
`;
