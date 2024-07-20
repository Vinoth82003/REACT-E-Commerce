import React from "react";
import "../css/order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Order = ({ orderItem }) => {
  const items = orderItem;
  console.log(items);
  return (
    <>
      <div className="order_page">
        <div className="inner_order">
          <header className="order_head">
            <h1 className="title">
              <FontAwesomeIcon icon={faCartArrowDown} /> Order Now
            </h1>
          </header>
          <ul className="listItem">
            {items.map((item) => (
              <li key={item.index} className="orderitem">
                <img src={item.img} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Original Amount: {item.original_amount}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Order;
