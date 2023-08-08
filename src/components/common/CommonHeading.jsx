import { Typography } from "@mui/material";
import React from "react";

const CommonHeading = ({ title }) => {
  return (
    <div>
      <Typography
        variant="h4"
        className="our-best-services-heading"
        sx={{
          fontSize: { xs: "18px", sm: "35px", lg: "42px" },
          fontWeight: "400",
          //   lineHeight: "28px",
          //   letterSpacing: "-0.01rem",
          textTransform: "capitalize",
          color: "#272522",
        }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default CommonHeading;
