import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnlockKeyhole,
  faUserAlt,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

import img0 from "../illus/Cash Payment.png";
import img1 from "../illus/Customer relationship management-bro.png";
import img2 from "../illus/Order ahead-rafiki.png";
import img3 from "../illus/Order food-amico.png";
import img4 from "../illus/Secure data.png";
import img5 from "../illus/Security-bro.png";
import img6 from "../illus/best_seller.png";
import img7 from "../illus/buy best product.png";
import img8 from "../illus/secure payment.png";
import { loginContext } from "../App";

import "../css/login.css";

const Login = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const loginDetails = useContext(loginContext);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 9); // Assuming you have 9 images
    }, 2000); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  const handleLogin = () => {
    loginDetails.setAuth(true);
  };

  return (
    <div className="login_page">
      <div className="inner_login">
        <div className="images_container">
          {[img0, img1, img2, img3, img4, img5, img6, img7, img8].map(
            (img, index) => (
              <div
                key={index}
                className={`img ${index === activeIndex ? "active" : ""}`}
              >
                <img src={img} alt={`${index}`} />
              </div>
            )
          )}
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
                <a href="/signup" className="signupLink">
                  Sign up
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="submit_button"
              onClick={handleLogin}
            >
              <FontAwesomeIcon icon={faUserCheck} /> Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
