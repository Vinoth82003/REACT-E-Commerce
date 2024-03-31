import React from "react";
import {
  faEye,
  faCartPlus,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import "../css/body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Body = ({ items }) => {
  return (
    <main className="body">
      <div className="inner_body">
        <ul className="items_lists">
          {items.map((item, index) => (
            <li key={index} className="item">
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
                <button type="button" className="view">
                  <div className="icon">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div className="text">View</div>
                </button>
                <button type="button" className="cart">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCartPlus} />
                  </div>
                  <div className="text">Cart</div>
                </button>
                <button type="button" className="buy">
                  <div className="icon">
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </div>
                  <div className="text">Buy</div>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Body;
