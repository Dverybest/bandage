import {
  addCartItem,
  deleteCartItem,
  removeCartItem,
  useAppDispatch,
} from "@/lib";
import { dollarToNaira } from "@/utils";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline, MdOutlineRemoveCircleOutline } from "react-icons/md";

export function CartItem({ item }: { item: ICartItem }) {
  const dispatch = useAppDispatch();

  const onAddToCartClick = (product: IProduct) => {
    dispatch(addCartItem(product));
  };

  const onRemoveFromCartClick = (product: IProduct) => {
    dispatch(deleteCartItem(product));
  };

  const onReduceFromCartClick = (product: IProduct) => {
    dispatch(removeCartItem(product));
  };
  return (
    <Box>
      <Box
        my={3}
        width={"100%"}
        height={"70px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"}>
          <Box>
            <Avatar
              alt={item.title}
              variant={"square"}
              sx={{ width: 100, height: 75 }}
              src={item.thumbnail}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            maxWidth={"130px"}
          >
            <Typography>{`${item.title}`}</Typography>
            {item.stock > 0 ? (
              <Typography color={"#2BA501"} fontSize={"12px"} fontWeight={600}>
                In stock
              </Typography>
            ) : (
              <Typography>Out of stock</Typography>
            )}
            ⭐️ {item.rating}
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <IconButton onClick={() => onReduceFromCartClick(item)}>
            <MdOutlineRemoveCircleOutline />
          </IconButton>
          {` ${item.quantity} `}
          <IconButton onClick={() => onAddToCartClick(item)}>
            <IoMdAddCircleOutline />
          </IconButton>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography>{`₦${dollarToNaira(
            item.price * item.quantity
          )}`}</Typography>
          <Typography fontSize={"9px"} fontWeight={300}>{`₦${dollarToNaira(
            item.price
          )} x ${item.quantity} ${
            item.quantity === 1 ? "item" : "items"
          }`}</Typography>
        </Box>
      </Box>
      <IconButton
        // edge="end"
        aria-label="delete"
        onClick={() => onRemoveFromCartClick(item)}
        color={"error"}
      >
        <MdDeleteOutline />
        <Typography>REMOVE</Typography>
      </IconButton>
      <hr style={{ height: "0.2px", background: "#ccc", border: "none" }} />
    </Box>
  );
}
