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
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appContext } from "../App";

const Cart = () => {
  const value = useContext(appContext);

  const handleView = (index) => {
    value.setView(true);
    value.setViewContent(value.all_items[index]);
  };

  const handleCartClose = () => {
    value.setCart(false);
  };

  const handleDec = (index) => {
    if (value.cartDetails[index].quantity > 1) {
      const newQuantity = value.cartDetails[index].quantity - 1;
      value.setCartDetails((prevDetails) => {
        const updatedDetails = [...prevDetails];
        updatedDetails[index].quantity = newQuantity;
        return updatedDetails;
      });
    }
  };

  const handleInc = (index) => {
    const newQuantity = value.cartDetails[index].quantity + 1;
    value.setCartDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index].quantity = newQuantity;
      return updatedDetails;
    });
  };

  const handleClear = () => {
    value.setCartDetails([]);
  };

  const handleRemove = (index) => {
    value.setCartDetails((prevDetails) => {
      prevDetails[index].isInCart = false;
      const updatedDetails = prevDetails.filter((_, i) => i !== index);
      return updatedDetails;
    });
  };

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
            {value.cartDetails.map((detail, index) => (
              <li key={detail.index} className="inner_cart_li">
                <div
                  className="remove_item"
                  onClick={() => handleRemove(index)}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </div>
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
                    <button
                      type="button"
                      className="plus"
                      onClick={() => handleDec(index)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                      type="text"
                      min={1}
                      value={detail.quantity}
                      readOnly
                    />
                    <button
                      type="button"
                      className="plus"
                      onClick={() => handleInc(index)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <button type="button" className="order">
                    <FontAwesomeIcon icon={faBagShopping} /> Order
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="bottom_bar">
            <button type="button" className="clear" onClick={handleClear}>
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
