import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { CategoryData } from "../../data/categoriesData/CategoryData";
import "../Banner/BannerCard.css";
import CommonHeading from "../../components/common/CommonHeading";
import kid from "../../assets/kis2.jpg";

const NewArival = () => {
  const settings = {
    // className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
    // autoplay: true,

    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <Grid container>
      <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5}></Grid>

      <Grid item xs={11} sm={11} md={11} lg={11}>
        <CommonHeading title="New Arival" />

        <Slider {...settings}>
          {CategoryData?.map((item, index) => {
            return (
              <Grid item lg={6} md={6} xs={6} sm={6} sx={{ mt: "15px" }}>
                <Card
                  sx={{ width: { xs: 120, lg: 200 }, position: "relative" }}
                  key={index}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.brideServeImg}
                      alt="green iguana"
                    />
                  </CardActionArea>
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      background: "rgba(0,0,0,0.5)",
                      width: { xs: 140, lg: 200 },
                      height: "5px",
                      padding: "0px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="caption"
                      sx={{ color: "white" }}
                    >
                      {item.heading}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Slider>
      </Grid>
      <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5}></Grid>
    </Grid>
  );
};

export default NewArival;
