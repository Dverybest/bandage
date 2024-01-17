import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";

export const CustomIconButton = styled(IconButton)`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid #e8e8e8;
  padding: 10px;
`;

export const CustomButton = styled(Button)`
  border-radius: 0;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const CompanyLogo = styled("img")`
  max-width: 105px;
  width: 100%;
  height: auto;
  object-fit: contain;
`;
