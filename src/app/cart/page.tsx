"use client";
import { mastercard, paystack, visa } from "@/assets";
import { useAppSelector } from "@/lib";
import { dollarToNaira } from "@/utils";

import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useState } from "react";
import { HiMiniChevronRight } from "react-icons/hi2";
import { CartItem } from "./cart-item";
import WireInfo from "./submit";

export default function Cart() {
  const { cartItems } = useAppSelector((state) => state.cart);
  const [openCheckout, setOpenCheckout] = useState(false);
  const deliveryCharges = 1500;
  const { totalItems, subTotalSum } = cartItems.reduce(
    (acc, current) => {
      return {
        subTotalSum:
          acc.subTotalSum + current.quantity * dollarToNaira(current.price),
        totalItems: acc.totalItems + current.quantity,
      };
    },
    { totalItems: 0, subTotalSum: 0 }
  );
  const totalSum = deliveryCharges + subTotalSum;
  return (
    <Box bgcolor={({ palette }) => palette.grey[100]}>
      {openCheckout && (
        <WireInfo
          open={openCheckout}
          totalSum={totalSum}
          onClose={() => setOpenCheckout(false)}
        />
      )}
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
            <Typography color={"text.disabled"} variant="h6">
              Shopping Cart
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          mb={6}
          columnGap={"30px"}
        >
          <Box flex={1} bgcolor={"#fff"} padding={5}>
            <Typography color={"text.primary"} variant="h4" fontWeight={700}>
              Shopping Cart
            </Typography>
            <Box
              my={3}
              width={"100%"}
              height={"56px"}
              bgcolor={"#3B4148"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              padding={2}
            >
              <Typography
                color={"#ffffff"}
                variant="h6"
                fontWeight={600}
                //mr={27}
                width={"90px"}
              >
                Item Details
              </Typography>
              <Typography
                color={"#ffffff"}
                variant="h6"
                fontWeight={600}
              ></Typography>
              <Typography color={"#ffffff"} variant="h6" fontWeight={600}>
                Quantity
              </Typography>
              <Typography color={"#ffffff"} variant="h6" fontWeight={600}>
                Price
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem key={item.title + item.id} item={item} />
            ))}
          </Box>
          <Box flex={1} bgcolor={"#fff"} padding={5}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography color={"text.primary"} variant="h4" fontWeight={700}>
                Order Summary
              </Typography>
              <Typography color={"text.primary"} fontWeight={400}>
                {`${totalItems} items`}
              </Typography>
            </Box>
            <Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                padding={"20px 0"}
              >
                <Typography
                  color={"text.primary"}
                  variant="h5"
                  fontWeight={400}
                  width={"300px"}
                >
                  Delivery Charges
                </Typography>
                <Typography
                  // color={"red"}
                  fontWeight={400}
                  fontSize={"12px"}
                  textAlign={"right"}
                >
                  ₦{deliveryCharges}
                </Typography>
              </Box>
              <hr />
            </Box>
            <Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                padding={"20px 0"}
              >
                <Typography
                  color={"text.primary"}
                  variant="h5"
                  fontWeight={400}
                  width={"300px"}
                >
                  SubTotal
                </Typography>
                <Typography
                  color={"text.primary"}
                  fontWeight={400}
                  fontSize={"12px"}
                >
                  {`₦${subTotalSum}`}
                </Typography>
              </Box>
              <hr />
            </Box>

            <Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                padding={"20px 0"}
              >
                <Typography
                  color={"text.primary"}
                  variant="h5"
                  fontWeight={400}
                  width={"300px"}
                >
                  Total
                </Typography>
                <Typography
                  color={"text.primary"}
                  fontWeight={700}
                  fontSize={"15px"}
                >
                  {`₦ ${totalSum}`}
                </Typography>
              </Box>
              <hr />
            </Box>
            <Box>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  color={"text.primary"}
                  variant="h5"
                  fontWeight={400}
                  width={"300px"}
                ></Typography>
                <Typography
                  color={"red"}
                  fontWeight={400}
                  fontSize={"12px"}
                  textAlign={"right"}
                >
                  {/* Excluding Delivery Charges */}
                </Typography>
              </Box>
            </Box>
            <NewContainer>
              <CustomButton
                variant="contained"
                onClick={() => setOpenCheckout(true)}
              >
                Proceed To Checkout
              </CustomButton>
            </NewContainer>
            <hr />
            <Box
              mt={4}
              display={"flex"}
              justifyContent={"space-between"}
              width={"200px"}
            >
              <Image
                src={paystack.src}
                alt="Paystack Logo"
                width={100}
                height={20}
              />
              <Image
                src={mastercard.src}
                alt="Paystack Logo"
                width={40}
                height={20}
              />
              <Image
                src={visa.src}
                alt="Paystack Logo"
                width={40}
                height={20}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const CustomButton = styled(Button)`
  border-radius: 0;
  color: ${({ theme }) => theme.palette.common.white};
  width: 100%;
  margin: 25px 0;
  padding: 15px;
`;

const NewContainer = styled(Box)`
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  background: ${({ theme }) => theme.palette.background.default};
`;
