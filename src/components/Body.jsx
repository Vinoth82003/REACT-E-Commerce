import React, { useContext } from "react";
import {
  faEye,
  faCartPlus,
  faHeart,
  faShoppingBag,
  faCheckToSlot,
} from "@fortawesome/free-solid-svg-icons";
import "../css/body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appContext } from "../App";

const Body = () => {
  const value = useContext(appContext);
  const items = value.all_items;

  function handleView(index) {
    value.setView(true);
    value.setViewContent(value.all_items[index]);
  }

  const addToCart = (index) => {
    const newItem = items[index];
    newItem.isInCart = true;
    value.setCartDetails((prevDetails) => [...prevDetails, newItem]);
  };

  const addToLike = (index) => {
    const newItem = items[index];
    newItem.isInLike = true;
    value.setLikeDetails((prevDetails) => [...prevDetails, newItem]);
  };

  return (
    <main className="body">
      <div className="inner_body">
        <ul className="items_lists">
          {items.map((item, index) => (
            <li key={index} className="item">
              <button type="button" className="buy">
                <div className="icon">
                  <FontAwesomeIcon icon={faShoppingBag} />
                </div>
                <div className="text">Buy</div>
              </button>
              <div className="item_image">
                <img src={item.img} alt="items" />
              </div>
              <h1 className="item_name">{item.name}</h1>
              <p className="description">{item.description}</p>
              <div className="amount">
                <p className="original_amount">RS.{item.original_amount}/-</p>
                <p className="discount_amount">RS.{item.discount_amount}/-</p>
                <p className="discount_percentage">
                  {item.discount_percentage}%
                </p>
              </div>
              <div className="options">
                <button
                  type="button"
                  className="view"
                  onClick={() => handleView(index)}
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div className="text">View</div>
                </button>
                {item.isInCart ? (
                  <div className="added">
                    <FontAwesomeIcon icon={faCheckToSlot} /> Added
                  </div>
                ) : (
                  <button
                    type="button"
                    className="cart"
                    onClick={() => addToCart(index)}
                  >
                    <div className="icon">
                      <FontAwesomeIcon icon={faCartPlus} />
                    </div>
                    <div className="text">Cart</div>
                  </button>
                )}
                {item.isInLike ? (
                  <div className="added liked">
                    <FontAwesomeIcon icon={faCheckToSlot} /> Liked
                  </div>
                ) : (
                  <button
                    type="button"
                    className="like"
                    onClick={() => addToLike(index)}
                  >
                    <div className="icon">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className="text">like</div>
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Body;
