import React from "react";
import img1 from "../illus/buy best product.png";
// import img2 from "../illus/best_seller.png";
// import img3 from "../illus/secure payment.png";
// import img4 from "../illus/Secure data.png";
import "../css/login.css";

const Login = () => {
  return (
    <>
      <div className="login_page">
        <div className="images">
          <img src={img1} alt="show" />
        </div>
        <div className="inner_login">
          <div className="left_images"></div>
          <div className="login_page"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
