import React from "react";
import "../css/login.css";
import img1 from "../illus/buy best product.png";
import img2 from "../illus/best_seller.png";
import img3 from "../illus/secure payment.png";
import img4 from "../illus/Secure data.png";
const Login = () => {
  return (
    <>
      <div className="login_page">
        <div className="inner_page">
          <div className="left_images">
            <div className="inner_image1">
              <img src={img1} alt="left side show" />
            </div>
            <div className="inner_image1">
              <img src={img2} alt="left side show" />
            </div>
            <div className="inner_image1">
              <img src={img3} alt="left side show" />
            </div>
            <div className="inner_image1">
              <img src={img4} alt="left side show" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
