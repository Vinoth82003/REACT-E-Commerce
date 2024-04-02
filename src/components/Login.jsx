import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnlockKeyhole,
  faUserAlt,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

import img0 from "../illus/buy best product.png";
import img1 from "../illus/best_seller.png";
import img2 from "../illus/secure payment.png";
import img3 from "../illus/Secure data.png";

import "../css/login.css";

const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const images = [img0, img1, img2, img3];
  const titles = ["Buy Product", "Best Seller", "Safe Payment", "Secure Data"];

  const handleImageChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="login_page">
      <div className="inner_login">
        <div className="images_container">
          <div className="image_title">
            {titles.map((title, index) => (
              <h1
                key={index}
                className={`imgTitle ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleImageChange(index)}
              >
                {title}
              </h1>
            ))}
          </div>
          <img src={images[currentIndex]} alt="show" className="imageShow" />
        </div>
        <div className="login_form">
          <form action="#" className="loginForm">
            <h1 className="form_title">Login Form</h1>
            <div className="inputField">
              <label htmlFor="name">
                <FontAwesomeIcon icon={faUserAlt} /> User Name :
              </label>
              <input type="text" placeholder="eg: John Doe" required />
            </div>
            <div className="inputField">
              <label htmlFor="password">
                <FontAwesomeIcon icon={faUnlockKeyhole} /> Password :
              </label>
              <input type="password" placeholder="eg: ********" required />
            </div>
            <div className="tmc">
              <label htmlFor="tmc">
                <input type="checkbox" name="tmc" id="tnc" /> Terms & Conditions
              </label>
              <label htmlFor="signup">
                <p className="signupLink">Sign up</p>
              </label>
            </div>
            <button type="submit" className="submit_button">
              <FontAwesomeIcon icon={faUserCheck} /> Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
