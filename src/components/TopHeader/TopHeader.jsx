import { Box } from "@mui/material";
import React from "react";

const TopHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "yellow",
        color: "black",
        height: "30px",
        width: "100vw",
        textAlign:"center",
        fontWeight:400,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      Free Shipping on All Orders | Get Extra ₹100 OFF on Spent of ₹999 Use
      Code: GG100
    </Box>
  );
};

export default TopHeader;
