import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faCartShopping,
  faHomeAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../css/header.css";
import logo from "../images/1.png";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav_bar">
          <div className="brand">
            <div className="brand_logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="bname disable-selection">CashewNuts</p>
          </div>
          <ul className="options nav_option disable-selection">
            <li className="menu_option">
              <div className="icon">
                <FontAwesomeIcon icon={faHomeAlt} />
              </div>
              <p className="text disable-selection">Home</p>
            </li>
            <li className="menu_option">
              <div className="icon">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <p className="text disable-selection">Cart</p>
            </li>
            <li className="menu_option">
              <div className="icon">
                <FontAwesomeIcon icon={faUserPlus} />
              </div>
              <p className="text disable-selection">Login</p>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
