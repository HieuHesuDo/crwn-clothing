import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true, //Gán giá trị mặc định của dropdown là true (đóng)
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden, //Dù giá trị boolean có là gì thì cũng đảo ngược lại
      };
    default:
      return state;
  }
};

export default cartReducer;
