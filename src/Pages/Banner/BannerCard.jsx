import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./BannerCard.css";
const BannerCard = ({ data }) => {
  return (
    <Box className="main-container">
      <Grid container>
        <Grid item xl={8} lg={8} md={7} sm={7} xs={6}>
          <Box className="text-content">
            <Typography variant="h2" className="heading-text">
              {data.heading}
            </Typography>

            <Typography
              className="description"
              style={{
                color: "#aababe",
                fontSize: "20PX",
                textTransform: "capitalize",
              }}
              variant="body1"
              id="description"
            >
              {data.description}
            </Typography>

            <Stack>
              <Button
                //   onClick={(e:any) => this.onClickNavigateToCart(data)}
                // startIcon={<ShoppingBasketIcon />}
                variant="contained"
                className="btn-sec"
              >
                View More
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xl={4} lg={4} md={5} sm={5} xs={6}>
          <img
            src={data.brideServeImg}
            alt="bannerImg"
            className="banner-img"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerCard;
