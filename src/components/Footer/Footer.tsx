import React from "react";
import "./Footer.css";
import WhatsApp from "../../assets/SocialMediaIcons/whatsapp (1).png";
import Instagram from "../../assets/SocialMediaIcons/instagram (1).png";
import Facebook from "../../assets/SocialMediaIcons/facebook (1).png";
import Woman from "../../assets/Avatars/woman.png";
import girl from "../../assets/Avatars/girl.png";
import PlaceHolder from "../../assets/Avatars/placeholder.png";

function Footer() {
  return (
    <div className="contact-us-container">
      <h1 className="title">Contact Us</h1>
      <div>
        <h2 className="avatar-name">
          <img src={Woman} alt="" className="avatar" /> Rima Kamaleldine{" "}
          {/* <a href="tel:+961-03-631-715">03 631 715</a> */}
        </h2>
        <h2 className="avatar-name">
          <img src={girl} alt="" className="avatar" /> Ruba Ghannam{" "}
          {/* <a href="tel:+961-70-790-411">70 790 411</a> */}
        </h2>
        <h2 className="location-text">
          <img src={PlaceHolder} alt="" className="place-holder" />
          <a
            className="location"
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/33%C2%B041'24.3%22N+35%C2%B030'47.3%22E/@33.6900892,35.5109474,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x750052531e82358c!8m2!3d33.6900892!4d35.5131361?hl=en"
          >
            Location
          </a>
        </h2>
      </div>
      <div className="icon-container">
        <div className="icons" id="ContactUs">
          <a
            href="https://www.instagram.com/soaplush.lb/"
            target="_blank"
            rel="noreferrer"
            className="icon icon--instagram"
          >
            <img src={Instagram} alt="" className="ri-line" />
          </a>
          <a
            href="https://wa.me/9613631715"
            target="_blank"
            rel="noreferrer"
            className="icon icon--whatsapp"
          >
            <img src={WhatsApp} alt="" className="ri-line" />
          </a>

          <a
            href="https://www.facebook.com/soaplush.lb"
            target="_blank"
            rel="noreferrer"
            className="icon icon--facebook"
          >
            <img src={Facebook} alt="" className="ri-line" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
