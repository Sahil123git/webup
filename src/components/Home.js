import React from "react";
import { Box, Typography } from "@mui/material";
import homeImage from "../assets/images/webdev-banner.png";
import Features from "./Features";

const Home = () => {
  return (
    <Box>
      <Box id="home">&nbsp;</Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "60px",
          justifyContent: "center",
          padding: "0 30px",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
        }}
      >
        <Box>
          <img src={homeImage} width="500px" />
        </Box>
        <Box sx={{ maxWidth: "600px", marginLeft: "20px" }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              marginBottom: "20px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <span style={{ color: "#007bff", fontWeight: "600" }}>Custom</span>{" "}
            Web Development Solutions
          </Typography>
          <Typography
            variant="body1"
            component="body"
            sx={{ fontSize: "18px", color: "grey", textAlign: "center" }}
          >
            We specialize in custom web development, delivering simple,
            intuitive, and high-performance solutions tailored to meet your
            business needs.
          </Typography>
        </Box>
      </Box>
      <Features />
    </Box>
  );
};

export default Home;
