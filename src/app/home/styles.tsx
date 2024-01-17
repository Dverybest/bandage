"use client";

import { Typography, styled } from "@mui/material";

export const SectionHeaderText = styled(Typography)`
  color: ${({ theme: { palette } }) => palette.text.secondary};
`;

export const BannerRightContainer = styled(Typography)`
  display: flex;
  flex-direction: column;
`;
