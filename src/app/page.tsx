import {
  card_cover_1,
  card_cover_2,
  card_cover_3,
  card_cover_4,
  user,
} from "@/assets";
import { ProductList } from "@/component";
import {
  Avatar,
  Box,
  Button,
  Container,
  ImageList,
  ImageListItem,
  Rating,
  Typography,
} from "@mui/material";
import { BiSolidBookReader } from "react-icons/bi";
import { MdOutlineTrendingUp } from "react-icons/md";
import { SlBookOpen } from "react-icons/sl";
import {
  BannerSection,
  HeroItemCard,
  SectionHeaderText,
  ServiceCard,
  itemData,
} from "./home";

export default function Home() {
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
          <HeroItemCard
            imageSrc={card_cover_1.src}
            sx={{ maxHeight: { xs: 300, md: "" } }}
            productName="FURNITURE"
            numberOfItems={5}
          />
          <Box rowGap={2} display={"flex"} flexDirection={"column"} flex={2}>
            <Box display={"flex"} flex={1}>
              <HeroItemCard
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
              <HeroItemCard
                productName="FURNITURE"
                numberOfItems={5}
                maxHeight={300}
                imageSrc={card_cover_3.src}
              />
              <HeroItemCard
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
        <Box
          display="flex"
          component={"section"}
          justifyContent={"center"}
          rowGap={10}
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
              THE BEST SERVICES
            </Typography>
            <SectionHeaderText variant={"body1"}>
              Problems trying to resolve the conflict between{" "}
            </SectionHeaderText>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <ServiceCard
              icon={BiSolidBookReader}
              title={"Easy Wins"}
              description={"Get your best looking smile now!"}
            />
            <ServiceCard
              icon={SlBookOpen}
              title={"Concrete"}
              description={
                "Defalcate is most focused in helping you discover your most beautiful smile"
              }
            />
            <ServiceCard
              icon={MdOutlineTrendingUp}
              title={"Hack Growth"}
              description={"Overcame any hurdle or any other problem."}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          component={"section"}
          justifyContent={"space-between"}
          rowGap={10}
          my={10}
          p={6}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            maxWidth={438}
            textAlign={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            rowGap={"20px"}
          >
            <Typography variant="h6" color={"text.primary"}>
              What they say about us
            </Typography>
            <Avatar
              alt="Regina Miles"
              src={user.src}
              sx={{ width: 90, height: 90 }}
            />
            <Rating name="simple-controlled" value={4} />
            <Typography variant="h6" color={"text.secondary"}>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </Typography>
            <Typography variant="h6" color={"primary.main"}>
              Regina Miles
            </Typography>
            <Typography variant="h6" color={"text.primary"}>
              Designer
            </Typography>
          </Box>
          <Box>
            <ImageList
              sx={{ width: { xs: 300, md: 462 }, height: { xs: 360, md: 426 } }}
              cols={3}
              rowHeight={150}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=142&h=142&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Container>
      <BannerSection>
        <Typography variant="h6" color={"primary.main"}>
          Designing Better Experience
        </Typography>
        <Typography variant="h2" color={"text.main"} maxWidth={571}>
          Problems trying to resolve the conflict between
        </Typography>
        <Typography variant="h3">₦1,648</Typography>
        <Typography variant="body1" maxWidth={571} color={"text.secondary"}>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>
        <Button variant={"contained"}>ADD YOUR CALL TO ACTION</Button>
      </BannerSection>
    </main>
  );
}
