import CartActionTypes from "./cart.types";
import {addItemToCart} from '../cart/cart.utils'

const INITIAL_STATE = {
  hidden: true, //Gán giá trị mặc định của dropdown là true (đóng)
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden, //Dù giá trị boolean có là gì thì cũng đảo ngược lại
      };
      case CartActionTypes.ADD_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload) //cartItem là array sẽ bao gồm item đang chứa trong state và item mới được truyền vào qua action payload
        }
    default:
      return state;
  }
};

export default cartReducer;
