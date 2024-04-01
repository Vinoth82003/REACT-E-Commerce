import React, { useContext } from "react";
import "../css/cart.css";
import {
  faCartShopping,
  faEye,
  faBagShopping,
  faPlus,
  faMinus,
  faTimes,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appContext } from "../App";
const Cart = () => {
  let value = useContext(appContext);

  function handleView(index) {
    value.setView(true);
    value.setViewContent(value.all_items[index]);
  }

  function handleCartClose() {
    value.setCart(false);
  }

  return (
    <>
      <div className="cart_part">
        <div className="inner_cart">
          <div className="cart_header">
            <div className="close_cart" onClick={handleCartClose}>
              <div className="line li-top"></div>
              <div className="line li-mid"></div>
              <div className="line li-bot"></div>
            </div>
            <div className="cart_title">
              <div className="icon">
                <span>{value.cartDetails.length}</span>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <h3 className="title">Cart</h3>
            </div>
          </div>
          <ul className="list_cart">
            {value.cartDetails.map((detail) => {
              return (
                <li className="inner_cart_li">
                  <div className="li_head">
                    <div className="inner_image">
                      <img src={detail.img} alt="cart image" />
                    </div>
                    <div className="inner_cnt">
                      <h3 className="title">{detail.name}</h3>
                      <p className="description">{detail.description}</p>
                    </div>
                  </div>
                  <div className="inner_cart_options">
                    <button
                      type="button"
                      className="view"
                      onClick={() => handleView(detail.index)}
                    >
                      <FontAwesomeIcon icon={faEye} /> view
                    </button>
                    <div className="quantity">
                      <button type="button" className="plus">
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <input type="text" min={1} value={1} readOnly />
                      <button type="button" className="plus">
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <button type="button" className="order">
                      <FontAwesomeIcon icon={faBagShopping} /> Order
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="bottom_bar">
            <button type="button" className="clear">
              <FontAwesomeIcon icon={faTimes} /> clear
            </button>
            <button type="button" className="checkout">
              <FontAwesomeIcon icon={faCheck} />
              check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
