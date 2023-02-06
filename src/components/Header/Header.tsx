import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/LogoHomePage/Soaplush.png";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useNavigate } from "react-router";
// import Cart from "../../pages/Cart/Cart";
import Shop from "../../assets/Avatars/icons8-shopping-bag-50.png";

function Header() {
  const navigate = useNavigate();
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
          <li
            className="header-menu-item header-menu-item-link"
            onClick={() => navigate("cart")}
          >
            <div className="cart-container">
              <img src={Shop} alt="" className="shop" />
              <span className="quantity-number">3</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
