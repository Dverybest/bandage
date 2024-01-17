import { useAppDispatch, useAppSelector } from "@/lib";
import { addCartItem, deleteCartItem, removeCartItem } from "@/lib/slice";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { IoMdAddCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";
import { MdDeleteOutline, MdOutlineRemoveCircleOutline } from "react-icons/md";

export const Cart: FC<{ setShow: (show: boolean) => void }> = ({ setShow }) => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const totalSum = cartItems.reduce<number>(
    (acc, current) =>
      acc + current.quantity * current.price - current.discountPercentage,
    0
  );
  const onAddToCartClick = (product: IProduct) => {
    dispatch(addCartItem(product));
  };

  const onReduceFromCartClick = (product: IProduct) => {
    dispatch(removeCartItem(product));
  };
  const onRemoveFromCartClick = (product: IProduct) => {
    dispatch(deleteCartItem(product));
  };
  return (
    <Box
      sx={{ width: "60vw", padding: 2 }}
      role="presentation"
      onKeyDown={() => setShow(false)}
    >
      <IconButton onClick={() => setShow(false)}>
        <IoMdCloseCircleOutline />
      </IconButton>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {cartItems.map((item) => (
          <ListItem key={item.title + item.id}>
            <ListItemAvatar sx={{ mr: 3 }}>
              <Avatar
                alt={item.title}
                variant={"rounded"}
                sx={{ width: 70, height: 70 }}
                src={item.thumbnail}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={
                <Box>
                  <Typography>
                    Quantity:{" "}
                    <IconButton onClick={() => onReduceFromCartClick(item)}>
                      <MdOutlineRemoveCircleOutline />
                    </IconButton>
                    {` ${item.quantity} `}
                    <IconButton onClick={() => onAddToCartClick(item)}>
                      <IoMdAddCircleOutline />
                    </IconButton>
                  </Typography>
                  <Box>
                    <Button
                      variant={"outlined"}
                      onClick={() => onRemoveFromCartClick(item)}
                      startIcon={<MdDeleteOutline />}
                      color={"error"}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box m={3}>
        <Typography variant="h3">Total : ${totalSum.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
};
