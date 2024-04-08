import React from "react";
import "../css/order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons/faCartArrowDown";

const Order = (orderItem) => {
  let item = orderItem.orderItem[0];
  console.log(item);
  return (
    <>
      <div className="oder_page">
        <div className="inner_page">
          <div className="header">
            <div className="title">
              <FontAwesomeIcon icon={faCartArrowDown} /> Order
            </div>
            {item.index} <br />
            {item.name} <br />
            {item.description} <br />
            {item.original_amount} <br />
            {item.discount_amount} <br />
            {item.discount_percentage} <br />
            {item.quantity} <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
