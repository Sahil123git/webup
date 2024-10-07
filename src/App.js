import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
const App = () => {
  return (
    <>
      <Header />
      <main style={{ width: "100%" }}>
        <Home />
        <AboutUs />
      </main>
    </>
  );
};
export default App;
