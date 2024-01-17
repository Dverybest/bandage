"use client";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
export const Subscribe = () => {
  return (
    <Container>
      <EmailInput id={""} placeholder="Your Email" />
      <CustomButton variant="contained">Subscribe</CustomButton>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.palette.grey[50]};
  background: ${({ theme }) => theme.palette.background.default};
`;
const EmailInput = styled("input")`
  border: none;
  flex: 1;
  padding: 15px 20px;
`;
const CustomButton = styled(Button)`
  border-radius: 0;
  color: ${({ theme }) => theme.palette.common.white};
`;
