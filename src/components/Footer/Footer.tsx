import React from "react";
import "./Footer.css";
import WhatsApp from "../../assets/SocialMediaIcons/whatsapp (1).png";
import Instagram from "../../assets/SocialMediaIcons/instagram (1).png";
import Facebook from "../../assets/SocialMediaIcons/facebook (1).png";

function Footer() {
  return (
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
  );
}

export default Footer;
