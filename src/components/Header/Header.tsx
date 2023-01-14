import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/LogoHomePage/Soaplush.png";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <div className="main-screen">
      <div className={isScrolled ? "header-container-nav" : "header-container"}>
        <HashLink className="header-menu-item-link" to="/#logo">
          <img className="header-logo" src={logo} alt="" />
        </HashLink>

        <ul className="header-menu">
          <li className="header-menu-item">
            <HashLink className="header-menu-item-link" to="/#Store">
              Store
            </HashLink>
          </li>
          <li className="header-menu-item">
            <HashLink className="header-menu-item-link" to="/#ContactUs">
              Contact Us
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
