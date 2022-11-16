import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { bannerData } from "../../../data/bannerData/bannerData";
import BannerCard from "./BannerCard";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <Stack
        id="pev"
        className={className}
        style={{
          marginLeft: "25px",
          zIndex: 1,
          alignItems: "center",
          width: " 44px",
          height: " 79px",
          backgroundColor: "#3e3e3e",
          border: "1px solid #000000",
          borderRadius: "0px 30px 30px 0px",
        }}
        onClick={onClick}
      >
        <ArrowBackIos
          id="arrowBtn"
          style={{
            color: "white",
            fontSize: "25px",
            marginTop: "25px",
            marginLeft: "7px",
          }}
        />
      </Stack>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <Stack
        id="pev"
        className={className}
        style={{
          marginRight: "25px",
          zIndex: 0,
          backgroundColor: "#3e3e3e",
          width: " 44px",
          height: " 79px",
          alignItems: "center",
          borderRadius: " 30px 0px 0px 30px",
        }}
        onClick={onClick}
      >
        <ArrowForwardIos
          id="arrowBtn"
          style={{
            color: "#ffffff",
            fontSize: "25px",
            marginTop: "25px",
            marginLeft: "5px",
          }}
        />
      </Stack>
    );
  };

  return (
    <Grid container>
      <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5}></Grid>
      <Grid item xs={11} sm={11} md={11} lg={11}>
        <Box
          className="Banner"
          sx={{
            width: "100%",
            margin: "auto",
          }}
        >
          <Slider
            {...settings}
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
          >
            {bannerData.map((data, index) => {
              return (
                <Fragment key={index}>
                  <BannerCard data={data} />
                </Fragment>
              );
            })}
          </Slider>
        </Box>
      </Grid>

      <Grid item lg={0.5} md={0.5} sm={0.5} xs={0.5}></Grid>
    </Grid>
  );
};

export default Banner;
