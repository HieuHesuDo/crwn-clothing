import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(
            (
              cartItem //map các item trong cartItems thành các cartItem riêng lẻ và render ra CartItem component
            ) => <CartItem key={cartItem.id} item={cartItem} />
          )
        ) : (
          <span className="empty-message">Giỏ hàng của bạn đang trống</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        THANH TOÁN
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); //Bọc connect trong withRouter để lấy các component được trả về từ connect thành component của mình và các component có thể sử dụng history
