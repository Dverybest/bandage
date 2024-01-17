"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Subscribe } from "./Subscribe";

export const Footer: FC = () => {
  return (
    <Box component={"footer"}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            display={"flex"}
            my={"58px"}
            rowGap={"11.5px"}
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent={"space-between"}
          >
            <Typography py={"13px"} component={"h3"} variant="h3">
              Bandage
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              gap={2}
              color="primary.main"
            >
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaTwitter size={24} />
            </Box>
          </Grid>
          <Box
            display={{ xs: "none", sm: "block" }}
            width={"100%"}
            height={"2px"}
            bgcolor={"divider"}
          />
          <Grid my={"50px"} xs={12} item container rowSpacing={"30px"}>
            <Grid
              xs={12}
              sm
              item
              display={"flex"}
              flexDirection={"column"}
              columnGap={"10px"}
            >
              <Typography color={"text.primary"} mb={"10px"} variant="h5">
                Company Info
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                About Us
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                Carrier
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                We are hiring
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                Blog
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm
              item
              display={"flex"}
              flexDirection={"column"}
              columnGap={"10px"}
            >
              <Typography color={"text.primary"} mb={"10px"} variant="h5">
                Legal
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                About Us
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                Carrier
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                We are hiring
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                Blog
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm
              item
              display={"flex"}
              flexDirection={"column"}
              columnGap={"10px"}
            >
              <Typography color={"text.primary"} mb={"10px"} variant="h5">
                Features
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                Business Marketing
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                User Analytic
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                Live Chat
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                Unlimited Support
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm
              item
              display={"flex"}
              flexDirection={"column"}
              columnGap={"10px"}
            >
              <Typography color={"text.primary"} mb={"10px"} variant="h5">
                Resources
              </Typography>
              <Typography
                component={"p"}
                color={"text.secondary"}
                variant="caption"
              >
                IOS & Android
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                Watch a Demo
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                Customers
              </Typography>
              <Typography color={"text.secondary"} variant="caption">
                API
              </Typography>
            </Grid>
            <Grid
              xs
              item
              display={"flex"}
              flexDirection={"column"}
              columnGap={"10px"}
            >
              <Typography color={"text.primary"} mb={"10px"} variant="h5">
                Get In Touch
              </Typography>
              <Subscribe />
              <Typography color={"text.secondary"} variant={"body2"}>
                Lore imp sum dolor Amit
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box py={"25px"} bgcolor={"grey.100"}>
        <Container>
          <Typography variant="h6" color={"text.secondary"}>
            Made With Love By Finland All Right Reserved{" "}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};
