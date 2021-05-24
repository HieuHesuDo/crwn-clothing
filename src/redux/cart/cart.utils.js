import CartItem from "../../components/cart-item/cart-item.component";

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find( //Hàm này chỉ để kiểm tra xem có item trùng hay không
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) { 
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } //Nếu item có trùng thì render ra object mới với item đang có và cộng quantity lên 1
        : cartItem
    );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}] //Nếu không có item nào trùng trong cartItem thì trả về item đang có trong cartItem và item mới với quantity là 1
};


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id 
  );

  if (existingCartItem.quantity === 1){ //Nếu quantity = 1 thì lần giảm tiếp theo sẽ xóa
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id) 
  }

  return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem) //Nếu quantity # 1 thì quantity + 1
}