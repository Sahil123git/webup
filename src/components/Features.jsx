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
          padding: {
            xs: "0px 20px 0 20px",
            md: "0px",
          },
        }}
      >
        <Typography variant="h4" component="h4" sx={{ fontWeight: "700" }}>
          Why to Choose us?
        </Typography>
        <Typography
          variant="body1"
          component="body"
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            color: "grey",
            textAlign: "center",
          }}
        >
          Discover the result-driven services that position us as a leading web
          development company.
        </Typography>
      </Box>
      <Box
        sx={{
          margin: {
            xs: "50px 50px 0 50px",
            md: "50px 100px 0 100px",
            lg: "50px 130px 0 130px",
          },
          gap: "50px 50px",
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: {
            xs: "auto",
            md: "auto auto",
            lg: "auto auto auto",
          },
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
