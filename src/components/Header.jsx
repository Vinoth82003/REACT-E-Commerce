import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faCartShopping,
  faUserAlt,
  faHeart,
  faSignOutAlt,
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
    value.setLiked(false);
  }

  function handleLiked() {
    value.setLiked(!value.isLiked);
    value.setCart(false);
  }

  const handleLogout = () => {
    value.setAuth(false);
  };

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
          <li className="menu_option" onClick={handleCart}>
            <div className="icon">
              <span>{value.cartDetails.length}</span>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <p className="text disable-selection">Cart</p>
          </li>
          <li className="menu_option" onClick={handleLiked}>
            <div className="icon">
              <span className="span">{value.likeDetails.length}</span>
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <p className="text disable-selection">Liked</p>
          </li>
          {value.isAuth ? <Profile /> : <Login />}
          <li className="menu_option" onClick={handleLogout}>
            <div className="icon">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
            <p className="text disable-selection">Logout</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
