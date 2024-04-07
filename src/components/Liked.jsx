import React, { useContext } from "react";
import "../css/cart.css";
import {
  faEye,
  faBagShopping,
  faCartPlus,
  faTimes,
  faTimesCircle,
  faCheckToSlot,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appContext } from "../App";

const Cart = () => {
  const value = useContext(appContext);

  const handleView = (index) => {
    value.setView(true);
    value.setViewContent(value.all_items[index]);
  };

  const handleLikedClose = () => {
    value.setLiked(false);
  };

  const handleClear = () => {
    const updatedlikeDetails = value.all_items.map((item) => ({
      ...item,
      isInLike: false,
    }));
    value.setItem(updatedlikeDetails);
    // console.log(updatedlikeDetails);
    value.setLikeDetails([]);
    console.log(value.all_items);
  };

  const handleRemove = (index) => {
    value.setLikeDetails((prevDetails) => {
      prevDetails[index].isInLike = false;
      const updatedDetails = prevDetails.filter((_, i) => i !== index);
      return updatedDetails;
    });
  };

  const addToCart = (index) => {
    const newItem = value.all_items[index];
    newItem.isInCart = true;
    value.setCartDetails((prevDetails) => [...prevDetails, newItem]);
  };

  return (
    <>
      <div className="cart_part">
        <div className="inner_cart">
          <div className="cart_header">
            <div className="close_cart" onClick={handleLikedClose}>
              <div className="line li-top"></div>
              <div className="line li-mid"></div>
              <div className="line li-bot"></div>
            </div>
            <div className="cart_title">
              <div className="icon">
                <span className="span">{value.likeDetails.length}</span>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <h3 className="title">Wish List</h3>
            </div>
          </div>
          <ul className="list_cart">
            {value.likeDetails.length > 0 ? (
              value.likeDetails.map((detail, index) => (
                <li key={detail.index} className="inner_cart_li">
                  <div
                    className="remove_item"
                    onClick={() => handleRemove(index)}
                  >
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </div>
                  <div className="li_head">
                    <div className="inner_image">
                      <img src={detail.img} alt="cart items" />
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
                    {detail.isInCart ? (
                      <div className="added">
                        <FontAwesomeIcon icon={faCheckToSlot} /> Added
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="cart"
                        onClick={() => addToCart(detail.index)}
                      >
                        <div className="icon">
                          <FontAwesomeIcon icon={faCartPlus} />
                        </div>
                        <div className="text">Cart</div>
                      </button>
                    )}
                    <button type="button" className="order">
                      <FontAwesomeIcon icon={faBagShopping} /> Order
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li className="inner_cart_li">
                Empty Wish List ..!☹️
                <span className="return" onClick={handleLikedClose}>
                  return shopping
                </span>
              </li>
            )}
          </ul>
          <div className="bottom_bar">
            <button type="button" className="clear" onClick={handleClear}>
              <FontAwesomeIcon icon={faTimes} /> clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
