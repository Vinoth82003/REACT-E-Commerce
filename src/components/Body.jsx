import React from "react";
import img1 from "../images/category_1.jpg";
import "../css/body.css";

const Body = () => {
  return (
    <>
      <main className="body">
        <div className="inner_body">
          <div className="image_container">
            <img src={img1} alt="image" />
          </div>
          <div className="content_container">
            <h1 className="title">Title 1</h1>
            <p className="content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              labore, sed natus asperiores eum assumenda! Fugiat saepe quae
              porro aliquam cupiditate dolores eius voluptates inventore,
              doloribus totam eveniet voluptas nihil. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Ea vero doloremque nisi ab
              illum. Aspernatur itaque obcaecati, nostrum, praesentium sint a
              eveniet id quos voluptate suscipit, expedita optio explicabo
              deleniti?
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Body;
