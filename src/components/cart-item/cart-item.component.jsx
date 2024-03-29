import React from "react";

import "./cart-item.style.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">Giá: ${price}</span>
      <span className="quantity">Số lượng: {quantity}</span>
    </div>
  </div>
);

export default CartItem;
