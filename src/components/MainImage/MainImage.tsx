import React from "react";
import "./MainImage.css";
import MainHomeImage from "../../assets/MainImageHomePage/WhatsApp Image 2022-12-22 at 11.05.45 AM.jpeg";
import MainLogoName from "../../assets/MainLogoName/grid-01.png";

function MainImage() {
  return (
    <div className="Main">
      <section className="main-logo-image">
        <img className="main-logo" src={MainLogoName} alt="" id="main-logo" />
      </section>
      <section>
        <img className="main-image" src={MainHomeImage} alt="" id="logo" />
        <section className="about-us-image">
          <h3 className="quote-text">What is Elegance? Soap and Water!</h3>
        </section>
      </section>
    </div>
  );
}

export default MainImage;
