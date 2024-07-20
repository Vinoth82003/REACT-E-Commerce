import React, { useContext, useEffect } from "react";
import "../css/view.css";
import {
  faShoppingBag,
  faCartPlus,
  faHeart,
  faCheckToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appContext } from "../App";

const View = () => {
  const value = useContext(appContext);
  const viewContent = value.viewContent;

  function handleViewClose() {
    value.setView(false);
  }

  const addToCart = (index) => {
    const newItem = value.all_items[index];
    newItem.isInCart = true;
    value.setCartDetails((prevDetails) => [...prevDetails, newItem]);
  };
  //
  return (
    <>
      <div className="view_page">
        <div className="inner_view">
          <span className="close_view" onClick={handleViewClose}>
            <span className="close_line left_cl"></span>
            <span className="close_line right_cl"></span>
          </span>
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
            {viewContent.isInCart ? (
              <div className="added">
                <FontAwesomeIcon icon={faCheckToSlot} /> Added
              </div>
            ) : (
              <button
                type="button"
                className="cart"
                onClick={() => addToCart(viewContent.index)}
              >
                <div className="icon">
                  <FontAwesomeIcon icon={faCartPlus} />
                </div>
                <div className="text">Cart</div>
              </button>
            )}
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
