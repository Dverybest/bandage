"use client";
import { useAppSelector } from "@/lib";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlinePerson } from "react-icons/md";
import { Cart } from "./Cart";

export const NavbarTop = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const { list } = useAppSelector((state) => state.wishList);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const totalItemInCart = cartItems.reduce<number>(
    (acc, current) => acc + current.quantity,
    0
  );
  const links = [
    { name: "Home", href: "/#" },
    { name: "Shop", href: "/#" },
    { name: "About", href: "/#" },
    { name: "Blog", href: "/#" },
    { name: "Contact", href: "/#" },
    { name: "Pages", href: "/#" },
  ];

  return (
    <>
      <Box
        display={"flex"}
        paddingX={3}
        paddingY={"10px"}
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "", md: "center" }}
        columnGap={5}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flex={{ xs: 1, md: "unset" }}
        >
          <Typography component={"h3"} variant="h3">
            Bandage
          </Typography>
          <IconButton
            onClick={() => setShowMenu((prev) => !prev)}
            sx={{ display: { md: "none" }, alignItems: "flex-start" }}
          >
            <HiMenuAlt3 />
          </IconButton>
        </Box>
        <Box
          columnGap={"21px"}
          rowGap={"20px"}
          alignSelf={"center"}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems={"center"}
          flexDirection={{ xs: "column", md: "row" }}
          display={{ xs: showMenu ? "flex" : "none", md: "flex" }}
          flex={1}
        >
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            columnGap={"21px"}
            rowGap={"20px"}
          >
            {links.map((link, index) => (
              <Link
                key={index}
                color={"#737373"}
                underline="none"
                href={link.href}
                variant="button"
              >
                {link.name}
              </Link>
            ))}
          </Box>
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            gap={2}
            rowGap={"20px"}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Button>
              <MdOutlinePerson />
              Login / Register
            </Button>
            <IconButton>
              <FiSearch />
            </IconButton>
            <Box>
              <IconButton onClick={() => setShowCart((prev) => !prev)}>
                <BsCart />
              </IconButton>
              {totalItemInCart}
            </Box>
            <Box>
              <IconButton>
                <GrFavorite />
              </IconButton>
              {list.length}
            </Box>
          </Box>
        </Box>
      </Box>
      <Drawer
        anchor={"right"}
        open={showCart}
        onClose={() => setShowCart(false)}
      >
        {showCart && <Cart setShow={setShowCart} />}
      </Drawer>
    </>
  );
};
