"use client";
import { MailIcon } from "@/assets";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export const NavbarDark = () => {
  return (
    <Container sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
      <Box display={"flex"} flexDirection={"row"} columnGap={"20px"}>
        <Box
          alignItems={"center"}
          columnGap={"5px"}
          component={"div"}
          display={"flex"}
          flexDirection={"row"}
        >
          <FiPhone />
          <Typography variant="h6" component={"h6"}>
            (225) 555-0118
          </Typography>
        </Box>
        <Box
          alignItems={"center"}
          justifyContent={"space-between"}
          columnGap={"5px"}
          display={"flex"}
          flex={1}
          flexDirection={"row"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            columnGap={1}
            flexDirection={"row"}
          >
            <MailIcon />
            <Typography variant="h6" component={"h6"}>
              michelle.rivera@example.com
            </Typography>
          </Box>
          <Typography variant="h6" component={"h6"}>
            Follow Us and get a chance to win 80% off
          </Typography>
          <Box display={"flex"} columnGap={"6px"} alignItems={"center"}>
            <Typography variant="h6" component={"h6"}>
              Follow Us :
            </Typography>
            <FaInstagram />
            <FaYoutube />
            <FaFacebook />
            <FaTwitter />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const Container = styled("div")`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.common.white};
  padding: 10px 24px;
`;
