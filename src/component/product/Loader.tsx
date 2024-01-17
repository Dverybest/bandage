import { Box, Skeleton } from "@mui/material";
import { Container } from ".";

export const Loader = () => {
  return (
    <Container as={"div"} href={""}>
      <Skeleton variant="rectangular" width={210} height={200} />
      <Skeleton variant={"text"} height={24} width={200} />
      <Box display={"flex"} columnGap={"5px"}>
        <Skeleton variant={"text"} height={24} width={100} />
        <Skeleton variant={"text"} height={24} width={100} />
      </Box>
    </Container>
  );
};
