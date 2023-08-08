import React, { Component } from "react";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import SalonLogo from "../../../assets/Navbar/G G Garments-logos_.jpeg";

import facebook from "../../../assets/Footerimages/facebook-icon.png";
import youtube from "../../../assets/Footerimages/youtube-icon.png";
import instagram from "../../../assets/Footerimages/instagram-icon.png";




import "./Footer.css";
import { FooterServices } from "../../../data/Footer/FooterServies";

const Footer = () => {
  return (
    <>
    <Box className="footer-background">
    <Grid
      container
      justifyContent="center"
      columnSpacing={3}
      rowSpacing={5}
      sx={{ p: 3 }}
    >
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <img src={SalonLogo} alt="salon logo" height="64px" width="100px" />
        <Typography className='footerText'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Box className='socialmedia'>
          <Box className='socialBox'>
            <img src={facebook} alt="facebook icon" />
          </Box>
          <Box className='socialBox'>
            <img src={instagram} alt="instagram icon" />
          </Box>
          <Box className='socialBox'>
            <img src={youtube} alt="youtube icon" />
          </Box>
        </Box>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <Box sx={{ mb: 2 }}>
          <Typography className='footerHeading'>
            Popular 
          </Typography>
          <Typography
            sx={{ borderBottom: "5px solid #EBB273", width: "40px" }}
          ></Typography>
        </Box>
        <Box>
          <List>
            {FooterServices.map((item) => {
              return (
                <ListItem
                  key={item.id}
                  onClick={() => {}}
                  className='servicesList'
                >
                  <KeyboardDoubleArrowRightIcon />
                  <ListItemText sx={{ ml: 4 }}>
                    {item.title}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <Box sx={{ mb: 4 }}>
          <Typography className="footerHeading">
            Contact Info
          </Typography>
          <Typography
            sx={{ borderBottom: "5px solid #EBB273", width: "40px" }}
          ></Typography>
        </Box>
        <Box>
          <Box className='infoBox'>
            <CallIcon className='infoIcons' />
            <Typography className='infoText'>
              9020133239
            </Typography>
          </Box>
          <Box className='infoBox'>
            <EmailIcon className='infoIcons' />
            <Typography className='infoText'>
              kasarumair786@gmail.com
            </Typography>
          </Box>
          <Box className='infoBox'>
            <LocationOnIcon className='infoIcons' />
            <Typography className='infoText'>
              Rahament Nagar, Degloor Naka Nanded
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
    <Box sx={{ py: 2 }}>
      <Divider
        variant="middle"
        sx={{ background: "#939290", opacity: 0.2, mb: 2 }}
      />
      <Typography className='CopyRightstext'>
        &copy; {new Date().getFullYear()} G.G | All Rights Reserved
      </Typography>
    </Box>
  </Box>
    </>
  );
};

export default Footer;
