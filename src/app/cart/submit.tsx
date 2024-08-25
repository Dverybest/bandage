import { useCheckoutMutation } from "@/lib";
import styled from "@emotion/styled";
import { Close, LocationOn, Person } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { grey, teal } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import { useState } from "react";

const StyledDialog = styled(Dialog)(({}) => ({
  "& .MuiDialogContent-root": {
    padding: 0,
  },
}));

const MainHeader = styled(Grid)(({ theme }) => ({
  backgroundColor: grey[100],
  padding: theme.spacing(2.5),
  alignItems: "center",
}));

const MainContent = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(5),
}));

const SecondaryContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2.5, 3),
  backgroundColor: grey[200],
}));

const countries = [{ value: "Nigeria", label: "Nigeria" }];

function WireInfo({
  open,
  onClose,
  totalSum,
}: {
  open: boolean;
  onClose: (value: boolean) => void;
  totalSum: number;
}) {
  const [checkout, { isLoading }] = useCheckoutMutation();
  const router = useRouter();
  const onPayButtonClick = async (e: any) => {
    e.preventDefault();
    checkout({ amount: totalSum })
      .unwrap()
      .then((res) => {
        if (res?.data) {
          router.push(res.data.paymentUrl);
        }
      })
      .catch(() => {});
  };
  const [values, setValues] = useState({
    shipping: "Cat in the Hat",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    address: "",
  });

  return (
    <StyledDialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={() => onClose(true)}
    >
      <DialogContent>
        <Grid
          component={"form"}
          method={"Post"}
          container
          onSubmit={onPayButtonClick}
        >
          <Grid item xs={8}>
            <MainHeader container>
              <Grid item xs={8}>
                <Typography color={teal[500]} variant="h5">
                  Ship To My Address
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color={grey[700]} variant="subtitle1" align="right">
                  Buyer Shipping Info
                </Typography>
              </Grid>
            </MainHeader>
            <MainContent container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Full Name"
                  id="name"
                />
              </Grid>
              <Grid item xs={122}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  type={"email"}
                  label="Email Address"
                  id="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Phone Number"
                  id="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction={"row"} spacing={1}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      label="City"
                      id="city"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      label="Postal Code"
                      id="postal-code"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="State/Province"
                  id="state-province"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Street Address"
                  id="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ mt: 2.5 }}
                  label="Country"
                  fullWidth
                  select
                  value={values.country}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, country: e.target.value }))
                  }
                  variant="outlined"
                  id="country"
                  margin="dense"
                >
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  multiline
                  rows={5}
                  variant="outlined"
                  label="Additional Info"
                  id="additional-info"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  style={{ borderRadius: 0, color: "white" }}
                  type={"submit"}
                >
                  {isLoading ? "loading..." : " Proceed To Pay"}
                </Button>
              </Grid>
            </MainContent>
          </Grid>
          <SecondaryContainer item xs={4}>
            <Grid container>
              <Grid item xs={12}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="Close"
                  sx={{ p: 1 }}
                  onClick={() => onClose(false)}
                >
                  <Close />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Typography color={teal[500]} variant="h5">
                  Seller Shipping From
                </Typography>
              </Grid>
              <Box sx={{ pt: 2.5 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <LocationOn sx={{ color: teal[500] }} />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography color={grey[700]} textTransform={"uppercase"}>
                      Lifestyle and Golf Estate
                      <strong>Enugu,Nigeria</strong>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ pt: 1.25, alignItems: "center" }}>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <Person sx={{ color: teal[500] }} />
                  </Grid>
                  <Grid item xs={7}>
                    <Typography color={grey[700]}>
                      <strong>Bandage</strong>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            {/* <Box sx={{ mt: "auto" }}>
              <Grid container>
                <Grid item xs={12}>
                  <Button>Cancel</Button>
                </Grid>
                <Grid item xs={12}>
                  <Button>SAVE</Button>
                </Grid>
              </Grid>
            </Box> */}
          </SecondaryContainer>
        </Grid>
      </DialogContent>
    </StyledDialog>
  );
}

export default WireInfo;
