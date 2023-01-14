import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainImage from "../../components/MainImage/MainImage";
import Store from "../../components/Store/Store";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Header />
      <MainImage />
      <AboutUs />
      <Store />
      <Footer />
    </>
  );
}

export default HomePage;
