import { CoLLECTION_ID, TRANZAKT_PUBLIC_KEY } from "@/config";
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
import { useSnackbar } from "notistack";
import { useState } from "react";
import { Tranzakt } from "tranzakt-react-sdk";

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

const tranzakt = new Tranzakt(TRANZAKT_PUBLIC_KEY!);
function WireInfo({
  open,
  onClose,
  totalSum,
}: {
  open: boolean;
  onClose: (value: boolean) => void;
  totalSum: number;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [values, setValues] = useState({
    country: "",
    city: "",
    state: "",
    postalCode: "",
    address: "",
    fullName: "",
    email: "",
    phone: "",
  });
  const onPayButtonClick = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    tranzakt
      .createInvoice({
        collectionId: CoLLECTION_ID!,
        payerEmail: values.email,
        payerName: values.fullName,
        payerPhoneNumber: values.phone,
        title: "Checkout Invoice",
        amount: totalSum,
        callBackUrl: window.location.href,
        billerMetaData: values,
      })
      .then((response) => {
        const invoice = response.data;
        console.log(`Payment URL: ${invoice.paymentUrl}`);
        window.location.href = invoice.paymentUrl;
        return;
      })
      .catch((e) => {
        setIsLoading(false);
        enqueueSnackbar(e.message, { variant: "error" });
      });
  };

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
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, fullName: e.target.value }))
                  }
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
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Phone Number"
                  id="phone"
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, phone: e.target.value }))
                  }
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
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      label="Postal Code"
                      id="postal-code"
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          postalCode: e.target.value,
                        }))
                      }
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
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      state: e.target.value,
                    }))
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Street Address"
                  id="address"
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
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
