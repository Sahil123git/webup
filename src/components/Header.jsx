import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  return (
    <AppBar position="sticky" sx={{ background: "#007bff" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          WebFolio
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button component="a" href="#home" sx={{ color: "#fff" }}>
            Home
          </Button>{" "}
          <Button component="a" href="#about" sx={{ color: "#fff" }}>
            About Us
          </Button>{" "}
          <Button component="a" href="#contact" sx={{ color: "#fff" }}>
            Contact Us
          </Button>
        </Box>
        <Drawer
          anchor="right"
          className="drawerStyle"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <List>
            <ListItem sx={{ padding: 0, borderBottom: "2px solid #9c9c9c" }}>
              <ListItemButton
                component="a"
                href="#home"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 0, borderBottom: "2px solid #9c9c9c" }}>
              <ListItemButton
                component="a"
                href="#about"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="About Us" />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 0, borderBottom: "2px solid #9c9c9c" }}>
              <ListItemButton
                component="a"
                href="#contact"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
