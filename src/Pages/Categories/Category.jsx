import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Img from "../../assets/Banner/pngwing.png";
import { CategoryData } from "../../data/categoriesData/CategoryData";
import Slider from "react-slick";
const Category = () => {
  const settings = {
    // className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
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
        <Slider {...settings}>
          {CategoryData?.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src={item.brideServeImg}
                    sx={{
                      width: 66,
                      height: 66,

                      bgcolor: "lightgray",
                    }}
                  />
                </Stack>
                <Typography variant="body2">{item.heading}</Typography>
              </Box>
            );
          })}
        </Slider>
      </Grid>
      <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5}></Grid>
    </Grid>
  );
};

export default Category;
