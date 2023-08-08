import { Box, Grid } from "@mui/material";
import React from "react";
import Banner from "../../Pages/Banner/Banner";
import Category from "../../Pages/Categories/Category";
import NewArival from "../../Pages/NewArival/NewArival";
import Regular from "../../Pages/Regular/Regular";
import Season from "../../Pages/Season/Season";
// import TopHeader from "../TopHeader/TopHeader";

const HomePage = () => {
  return (
    <Grid container spacing={2}>
     <Grid item xs={12} md={12} sm={12} lg={12}>
     
     <Banner />
     </Grid>
     <Grid  item xs={12} md={12} sm={12} lg={12}>
     
     <Category/>
   
     </Grid>
     <Grid  item xs={12} md={12} sm={12} lg={12}>
     
     <NewArival/>
   
     </Grid>
     <Grid  item xs={12} md={12} sm={12} lg={12}>
     
     <Regular/>
   
     </Grid>
     <Grid  item xs={12} md={12} sm={12} lg={12} sx={{mb:"90px"}}>
     
     <Season/>
   
     </Grid>
    </Grid>
  );
};

export default HomePage;
