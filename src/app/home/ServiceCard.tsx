import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IconType } from "react-icons";

export const ServiceCard: FC<{
  icon: IconType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      rowGap={"20px"}
      py={"35px"}
      px={"40px"}
    >
      <Box color={"primary.main"}>
        <Icon size={72} />
      </Box>
      <Typography textAlign={"center"} variant="h3">
        {title}
      </Typography>
      <Typography textAlign={"center"} maxWidth={232} variant="body1">
        {description}
      </Typography>
    </Box>
  );
};
