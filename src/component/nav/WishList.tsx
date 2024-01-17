import { useAppDispatch, useAppSelector } from "@/lib";
import { addListItem } from "@/lib/slice";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

export const WishList: FC<{ setShow: (show: boolean) => void }> = ({
  setShow,
}) => {
  const { list } = useAppSelector((state) => state.wishList);
  const dispatch = useAppDispatch();

  const onRemoveFromCartClick = (product: IProduct) => {
    dispatch(addListItem(product));
  };
  return (
    <Box
      sx={{ width: { xs: 300, md: "60vw" }, padding: 2 }}
      role="presentation"
      onKeyDown={() => setShow(false)}
    >
      <IconButton onClick={() => setShow(false)}>
        <IoMdCloseCircleOutline />
      </IconButton>
      <Typography variant="h3">WishList</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {list.map((item) => (
          <ListItem
            key={item.title + item.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => onRemoveFromCartClick(item)}
                color={"error"}
              >
                <MdDeleteOutline />
              </IconButton>
            }
          >
            <ListItemAvatar sx={{ mr: 3 }}>
              <Avatar
                alt={item.title}
                variant={"rounded"}
                sx={{ width: 70, height: 70 }}
                src={item.thumbnail}
              />
            </ListItemAvatar>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
