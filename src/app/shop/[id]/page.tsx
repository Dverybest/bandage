"use client";
import { aws, hooli, piper_hat, redit, stripe, yft } from "@/assets";
import { ProductList } from "@/component";
import { useAppDispatch, useAppSelector, useGetProductByIdQuery } from "@/lib";
import { addCartItem, addListItem } from "@/lib/slice";
import { dollarToNaira } from "@/utils";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Rating,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { BsCart } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { HiMiniChevronRight } from "react-icons/hi2";
import { MdFavorite } from "react-icons/md";
import {
  CompanyLogo,
  CustomButton,
  CustomIconButton,
  CustomTabPanel,
  ProductImageSlider,
} from "./component";

export default function ProductDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: product } = useGetProductByIdQuery(id);
  const [value, setValue] = useState(0);
  const { list } = useAppSelector((state) => state.wishList);
  const isInWishList = !!list.find((item) => item.id === product?.id);
  const productColors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];
  const dispatch = useAppDispatch();
  const onAddToCartClick = () => {
    if (!product) return;
    dispatch(addCartItem(product));
  };
  const onAddToWishListClick = () => {
    if (!product) return;
    dispatch(addListItem(product));
  };
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box bgcolor={({ palette }) => palette.grey[100]}>
      <Container>
        <Box
          py={3}
          display={"flex"}
          justifyContent={{ xs: "center", sm: "normal" }}
        >
          <Breadcrumbs
            separator={<HiMiniChevronRight />}
            aria-label="breadcrumb"
          >
            <Link
              variant={"caption"}
              underline="hover"
              color="inherit"
              href="/"
            >
              Home
            </Link>
            <Typography color={"text.disabled"} variant="h6">
              Shop
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          mb={6}
          columnGap={"30px"}
        >
          <Box flex={1}>
            <ProductImageSlider
              images={product?.images ?? []}
              title={product?.title ?? ""}
            />
          </Box>
          <Box flex={1}>
            <Typography color={"text.primary"} variant="h4" fontWeight={400}>
              {product?.title ?? ""}
            </Typography>
            <Box mt={"12px"} display={"flex"}>
              <Rating name="simple-controlled" value={product?.rating ?? 0} />
              <Typography color={"text.secondary"} variant="h6">
                {10} Reviews
              </Typography>
            </Box>
            <Typography
              mt={"20px"}
              mb={"5px"}
              color={"text.primary"}
              variant="h3"
            >
              ₦{dollarToNaira(product?.price ?? 0)}
            </Typography>
            <Box display={"flex"}>
              <Typography color={"text.secondary"} variant="h6">
                Availability :
              </Typography>
              <Typography color={"primary.main"} variant="h6">
                {" "}
                In Stock
              </Typography>
            </Box>
            <Typography my={"16px"} color={"text.secondary"} variant="body1">
              {product?.description}
            </Typography>
            <Box
              mb={"30px"}
              width={"100%"}
              height={"2px"}
              bgcolor={({ palette }) => palette.grey[200]}
            />

            <Box display={"flex"} columnGap={"10px"} mb={"67px"}>
              {productColors.map((color, index) => (
                <Box
                  key={index}
                  bgcolor={color}
                  width={30}
                  borderRadius={15}
                  height={30}
                />
              ))}
            </Box>
            <Box display={"flex"} alignItems={"center"} columnGap={"10px"}>
              <CustomButton color={"primary"} variant="contained">
                Select Options
              </CustomButton>
              <CustomIconButton
                aria-label="add to shopping cart"
                onClick={onAddToCartClick}
              >
                <BsCart />
              </CustomIconButton>
              <CustomIconButton onClick={onAddToWishListClick}>
                {isInWishList ? <MdFavorite color="red" /> : <GrFavorite />}
              </CustomIconButton>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        component={"section"}
        bgcolor={"common.white"}
        py={"48px"}
        display={{ xs: "none", sm: "block" }}
      >
        <Container sx={{ display: { xs: "none", sm: "block" } }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Description" />
              <Tab label="Additional Information" />
              <Tab label="Reviews (0)" />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={value}>
            <Grid container py={"24px"}>
              <Grid
                sm={7}
                item
                display={"flex"}
                flexDirection={"column"}
                rowGap={"30px"}
              >
                <Typography color={"text.primary"} variant="h3">
                  the quick fox jumps over
                </Typography>
                <Typography color={"text.secondary"} variant="body1">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </Typography>
                <Typography color={"text.secondary"} variant="body1">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </Typography>
                <Typography color={"text.secondary"} variant="body1">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </Typography>
              </Grid>
              <Grid sm={4} item>
                <Box
                  component={"img"}
                  maxWidth={413}
                  width={"100%"}
                  height={372}
                  borderRadius={"6px"}
                  src={product?.images[0]}
                />
              </Grid>
            </Grid>
          </CustomTabPanel>
        </Container>
      </Box>
      <Container sx={{ display: { xs: "none", sm: "block" } }}>
        <Box py={"48px"}>
          <Typography color={"text.primary"} variant="h3">
            BEST SELLER PRODUCTS
          </Typography>
          <Box
            my={3}
            width={"100%"}
            height={"2px"}
            bgcolor={({ palette }) => palette.grey[200]}
          />
          <ProductList hideLoadMore />
        </Box>
      </Container>
      <Container>
        <Box
          py={"50px"}
          columnGap={"30px"}
          rowGap={"60px"}
          alignItems={"center"}
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent={"center"}
        >
          <CompanyLogo src={hooli.src} alt="hooli logo" />
          <CompanyLogo src={yft.src} alt="yft logo" />
          <CompanyLogo src={piper_hat.src} alt="piper_hat logo" />
          <CompanyLogo src={stripe.src} alt="stripe logo" />
          <CompanyLogo src={aws.src} alt="aws logo" />
          <CompanyLogo src={redit.src} alt="redit logo" />
        </Box>
      </Container>
    </Box>
  );
}
