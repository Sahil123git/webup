import { Box, Typography } from "@mui/material";
import React from "react";
import FeaturesTab from "./FeaturesTab";
import { featuresArray } from "../staticData";

const Features = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Typography variant="h4" component="h4" sx={{ fontWeight: "700" }}>
          Why to Choose us?
        </Typography>
        <Typography
          variant="body1"
          component="body"
          sx={{ fontSize: "18px", fontWeight: "500", color: "grey" }}
        >
          Discover the result-driven services that position us as a leading web
          development company.
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {featuresArray.map((ele) => (
          <FeaturesTab
            key={crypto.randomUUID()}
            title={ele.title}
            content={ele.content}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Features;
