import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnlockKeyhole,
  faUserAlt,
  faUserCheck,
  faExclamationTriangle,
  faTimesCircle,
  faEnvelope,
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
  const [isTermsCondition, setTermsCondition] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // State to hold the checked status
  const [isEmptyInput, setIsEmptyInput] = useState(false); // State to hold empty input status

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 9); // Assuming you have 9 images
    }, 5000); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  const handleCloseAlert = () => {
    setTermsCondition(false);
    setIsEmptyInput(false);
  };

  const switchLogin = () => {
    loginDetails.setSignup(false);
  };

  const Alert = ({ message }) => {
    return (
      <>
        <div className="alert">
          <div className="alertClose" onClick={handleCloseAlert}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
          <div className="alertTitle">
            <div className="alertIcon">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
            Alert
          </div>
          <div className="alertContent">{message}</div>
        </div>
      </>
    );
  };

  const handleTmc = (event) => {
    setIsChecked(event.target.checked); 
    // Update the isChecked state
    console.log(isChecked);
  };

  const handleLogin = () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      setIsEmptyInput(true);
      return;
    }

    // Perform login action if all conditions are met
    loginDetails.setAuth(true);
  };

  return (
    <>
      <div className="login_page">
        <div className="inner_login">
          {isEmptyInput && <Alert message="Please fill all input fields" />}
          {isTermsCondition && (
            <Alert message="Accept the Terms and Conditions to login" />
          )}
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
              <h1 className="form_title signupTitle">Sign up</h1>
              <div className="inputField signupInput">
                <label htmlFor="name">
                  <FontAwesomeIcon icon={faUserAlt} /> User Name :
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="eg: John Doe"
                  required
                />
              </div>
              <div className="inputField signupInput">
                <label htmlFor="name">
                  <FontAwesomeIcon icon={faEnvelope} /> Email :
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="eg: John Doe"
                  required
                />
              </div>
              <div className="inputField signupInput">
                <label htmlFor="password">
                  <FontAwesomeIcon icon={faUnlockKeyhole} /> Password :
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="eg: ********"
                  required
                />
              </div>
              <div className="inputField signupInput">
                <label htmlFor="password">
                  <FontAwesomeIcon icon={faUnlockKeyhole} /> Confirm Password :
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="eg: ********"
                  required
                />
              </div>
              <div className="tmc">
                <label htmlFor="tmc">
                  <input
                    type="checkbox"
                    name="tmc"
                    id="tnc"
                    onChange={handleTmc} // Pass the function directly
                  />
                  Terms & Condition
                </label>
                <label htmlFor="signup" onClick={switchLogin}>
                  <a href="#" className="signupLink">
                    login
                  </a>
                </label>
              </div>
              <button
                type="button"
                className="submit_button"
                onClick={handleLogin}
              >
                <FontAwesomeIcon icon={faUserCheck} /> Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
