import React from "react";
import { connect } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.syle.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Sản phẩm</span>
      </div>
      <div className="header-block">
        <span>Tên</span>
      </div>
      <div className="header-block">
        <span>Số lượng</span>
      </div>
      <div className="header-block">
        <span>Giá</span>
      </div>
      <div className="header-block">
        <span></span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
    ))}
    <div className="total">
      <span>Tổng tiền: ${cartTotal}</span>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);
