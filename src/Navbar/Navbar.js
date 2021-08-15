import React, { useState } from "react";
import { ReactComponent as Menu } from "../Navbar/menu.svg";
import { ReactComponent as Cart } from "../Navbar/cart.svg";
import "./Navbar.css";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="navbar">
      <div>
        <Menu onClick={() => setShowLinks(!showLinks)} className="menuIcon" />
      </div>
      <div>
        <Cart className="cartIcon" />
      </div>
      <div className="rightSide">
        <h2 className="head">Lorem</h2>
        <h2 className="navTitle">Lorem Ipsum</h2>
      </div>

      <div className="leftSide">
        <div className="NavLinks" id={showLinks ? "hidden" : ""}>
          <a href="#about">
            <span id="text">About</span>
          </a>
          <br />
          <a href="#services">Services</a>
          <br />
          <a href="#cuisine">Cuisine</a>
          <br />
          <a href="#gallery">Gallery</a>
          <br />
          <a href="#contact">Contact</a>
          <br />
          <a href="#book">Book</a>
        </div>

        <button className="cartBtn">Cart</button>
      </div>
    </div>
  );
}
