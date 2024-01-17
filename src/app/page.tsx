import {
  card_cover_1,
  card_cover_2,
  card_cover_3,
  card_cover_4,
} from "@/assets";
import { BannerItemCard, ProductList } from "@/component";
import { Box, Container, Typography } from "@mui/material";
import { SectionHeaderText } from "./home";

export default async function Home() {
  return (
    <main>
      <Container>
        <Box
          display="flex"
          justifyContent={"center"}
          gap={2}
          py={10}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <BannerItemCard
            imageSrc={card_cover_1.src}
            sx={{ maxHeight: { xs: 300, md: "" } }}
            productName="FURNITURE"
            numberOfItems={5}
          />
          <Box rowGap={2} display={"flex"} flexDirection={"column"} flex={2}>
            <Box display={"flex"} flex={1}>
              <BannerItemCard
                imageSrc={card_cover_2.src}
                sx={{ objectPosition: { xs: "center" } }}
                height={300}
                productName="FURNITURE"
                numberOfItems={5}
              />
            </Box>
            <Box
              display={"flex"}
              gap={2}
              flexDirection={{ xs: "column", md: "row" }}
            >
              <BannerItemCard
                productName="FURNITURE"
                numberOfItems={5}
                maxHeight={300}
                imageSrc={card_cover_3.src}
              />
              <BannerItemCard
                productName="FURNITURE"
                numberOfItems={5}
                maxHeight={300}
                imageSrc={card_cover_4.src}
              />
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          component={"section"}
          justifyContent={"center"}
          rowGap={3}
          py={10}
          flexDirection={"column"}
        >
          <Box
            rowGap={"10px"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <SectionHeaderText variant="h4">
              Featured Products
            </SectionHeaderText>
            <Typography variant="h3" component={"h3"}>
              BEST SELLER PRODUCTS
            </Typography>
            <SectionHeaderText variant={"body1"}>
              Problems trying to resolve the conflict between{" "}
            </SectionHeaderText>
          </Box>
          <ProductList />
        </Box>
      </Container>
    </main>
  );
}
