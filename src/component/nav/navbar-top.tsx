"use client";
import { useAppSelector } from "@/lib";
import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlinePerson } from "react-icons/md";

export const NavbarTop = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const { list } = useAppSelector((state) => state.wishList);
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
    <Box
      display={"flex"}
      paddingX={3}
      paddingY={"10px"}
      justifyContent={"space-between"}
      alignItems={{ xs: "", md: "center" }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flex={1}
        columnGap={5}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
      >
        <Typography component={"h3"} variant="h3">
          Bandage
        </Typography>
        <Box
          columnGap={"21px"}
          // justifyContent={{ xs: "flex-end", md: "space-between" }}
          alignItems={"center"}
          flexDirection={{ xs: "column", md: "row" }}
          display={{ xs: showMenu ? "flex" : "none", md: "flex" }}
          flex={1}
        >
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            columnGap={"21px"}
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
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Button>
              <MdOutlinePerson />
              Login / Register
            </Button>
            <FiSearch />
            <Box>
              <BsCart />
              {totalItemInCart}
            </Box>
            <Box>
              <GrFavorite />
              {list.length}
            </Box>
          </Box>
        </Box>
      </Box>
      <IconButton
        onClick={() => setShowMenu((prev) => !prev)}
        sx={{ display: { md: "none" }, alignItems: "flex-start" }}
      >
        <HiMenuAlt3 />
      </IconButton>
    </Box>
  );
};
