import React, { useContext, useEffect } from "react";
import "../css/view.css";
import {
  faShoppingBag,
  faCartPlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appContext } from "../App";

const View = () => {
  const value = useContext(appContext);
  const viewContent = value.viewContent;

  function handleViewClose() {
    value.setView(false);
  }
  return (
    <>
      <div className="view_page">
        <div className="inner_view">
          <div className="close_view" onClick={handleViewClose}>
            <div className="close_line left_cl"></div>
            <div className="close_line right_cl"></div>
          </div>
          <div className="top_lft">
            <div className="image">
              <img src={viewContent.img} alt="view product" />
            </div>
            <div className="top_cnt">
              <h1 className="title">{viewContent.name}</h1>
              <p className="decription">{viewContent.description}</p>
              <div className="inner_flow">
                <ul className="product_details">
                  <p className="ul-title">Additional Details</p>
                  <li className="destail">Per Pack weight min 250 mg to 5kg</li>
                  <li className="destail">
                    Per Pack prize min Rs 250/- to Rs 5000/-
                  </li>
                  <li className="destail">
                    Delivery avaialable all over tamil nadu
                  </li>
                  <li className="destail">
                    The quality of the product is top class
                  </li>
                  <li className="destail">The without the involvement of</li>
                </ul>
                <ul className="product_details">
                  <p className="ul-title">Additional Details</p>
                  <li className="destail">Per Pack weight min 250 mg to 5kg</li>
                  <li className="destail">
                    Per Pack prize min Rs 250/- to Rs 5000/-
                  </li>
                  <li className="destail">
                    Delivery avaialable all over tamil nadu
                  </li>
                  <li className="destail">
                    The quality of the product is top class
                  </li>
                  <li className="destail">The without the involvement of</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bot_bot">
            <button type="button" className="order">
              <div className="icon">
                <FontAwesomeIcon icon={faShoppingBag} />
              </div>
              <div className="text">Order</div>
            </button>
            <button type="button" className="cart">
              <div className="icon">
                <FontAwesomeIcon icon={faCartPlus} />
              </div>
              <div className="text">Cart</div>
            </button>
            <button type="button" className="like">
              <div className="icon">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="text">Like</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
