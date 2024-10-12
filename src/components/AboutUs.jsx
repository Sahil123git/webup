import React from "react";
import { Box, Typography } from "@mui/material";
import aboutUsImg from "../assets/images/about.jpg";

const AboutUs = () => {
  return (
    <Box
      sx={{
        padding: { xs: "0 30px", sm: "0 60px", md: "0 130px" },
        margin: "80px 0px",
      }}
      id="about"
    >
      <Box sx={{ padding: "30px 30px", backgroundColor: "#fff6f6" }}>
        <Box>
          <Typography variant="h4" component="h4" sx={{ fontWeight: "700" }}>
            About Us
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "500",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            We are a team of web experts with experience in website building and
            marketing to help businesses grow online.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: {
                xs: "column",
                lg: "row",
              },
            }}
          >
            <Box sx={{ maxWidth: "700px" }}>
              <Typography sx={{ marginBottom: "30px" }}>
                <strong>Mission: </strong>
                Our mission is to empower our clients to use the internet to its
                full potential by providing affordable, effective, custom design
                and marketing solutions.
              </Typography>
              <Typography sx={{ marginBottom: "30px" }}>
                <strong>Vision: </strong>
                Our vision is to become a global leader in providing the best
                and unique web design and marketing services to improve our
                client’s productivity and business strength.
              </Typography>{" "}
              <Typography>
                <strong>Why Choose Us? : </strong>
                We are the right term for your business. We have the expertise
                and knowledge to offer impartial advice and services at an
                honest price.
                <br />
                With us you’ll feel heard. We listen to our client requirements
                and then select the right solution that fits. We care for your
                business as our own. We take a sincere interest in it and
                genuinely want to help your company reach its potential.
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: {
                  xs: "20px",
                  lg: "0px",
                },
              }}
            >
              <img src={aboutUsImg} width="300px" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
