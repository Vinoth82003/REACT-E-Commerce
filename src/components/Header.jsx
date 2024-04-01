import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faCartShopping,
  faHomeAlt,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../css/header.css";
import logo from "../images/1.png";
import { appContext } from "../App";

function Header() {
  const value = useContext(appContext);
  const [isToggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!isToggle);
  };

  const Profile = () => {
    return (
      <>
        <li className="menu_option">
          <div className="icon">
            <FontAwesomeIcon icon={faUserAlt} />
          </div>
          <p className="text">Profile</p>
        </li>
      </>
    );
  };

  const Login = () => {
    return (
      <>
        <li className="menu_option">
          <div className="icon">
            <FontAwesomeIcon icon={faUserPlus} />
          </div>
          <p className="text disable-selection">Login</p>
        </li>
      </>
    );
  };

  function handleCart() {
    value.setCart(!value.isCart);
  }

  return (
    <header className="header">
      <nav className="nav_bar">
        <div className="brand">
          <div className="brand_logo">
            <img src={logo} alt="logo" />
          </div>
          <p className="bname disable-selection">CashewNuts</p>
        </div>
        <div
          className={`toggle_bar ${isToggle ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line top"></div>
          <div className="line mid"></div>
          <div className="line bot"></div>
        </div>
        <ul
          className={`options nav_option ${
            isToggle ? "active" : ""
          } disable-selection`}
        >
          <li className="menu_option">
            <div className="icon">
              <FontAwesomeIcon icon={faHomeAlt} />
            </div>
            <p className="text disable-selection">Home</p>
          </li>
          <li className="menu_option" onClick={handleCart}>
            <div className="icon">
              <span>{value.cartDetails.length}</span>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <p className="text disable-selection">Cart</p>
          </li>
          {value.isAuth ? <Profile /> : <Login />}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
