import React from "react";
import "./App.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
let theme = createTheme();
theme = responsiveFontSizes(theme);
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main style={{ width: "100%" }}>
        <Home />
        <AboutUs />
        <ContactUs />
      </main>
    </ThemeProvider>
  );
};
export default App;
