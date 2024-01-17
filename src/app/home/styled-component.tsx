"use client";

import { bg_1 } from "@/assets";
import { Typography, styled } from "@mui/material";

export const SectionHeaderText = styled(Typography)`
  color: ${({ theme: { palette } }) => palette.text.secondary};
`;

export const BannerSection = styled("section")`
  display: flex;
  flex-direction: column;
  background-image: url(${bg_1.src});
  padding: 112px 30px;
  align-items: center;
  justify-content: center;
  text-align: center;
  row-gap: 30px;
  button {
    color: ${({ theme: { palette } }) => palette.common.white};
  }
`;
