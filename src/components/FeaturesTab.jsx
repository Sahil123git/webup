import { Box, Typography } from "@mui/material";
import React from "react";

const FeaturesTab = ({ title, content }) => {
  return (
    <Box className="featureStyle">
      <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "18px", color: "grey", marginTop: "10px" }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default FeaturesTab;
