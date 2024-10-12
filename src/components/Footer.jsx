import React from "react";
import { Box, Container, Grid2, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#007bff", color: "#fff", py: 3 }}>
      <Container>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We provide top-notch web solutions that ensure your business
              excels online with high-performance designs.
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#home" color="inherit" underline="none" display="block">
              Home
            </Link>
            <Link
              href="#about"
              color="inherit"
              underline="none"
              display="block"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              color="inherit"
              underline="none"
              display="block"
            >
              Contact Us
            </Link>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: info@webfolio.com</Typography>
            <Typography variant="body2">Phone: +91 987654321</Typography>
          </Grid2>
        </Grid2>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} WebFolio. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
