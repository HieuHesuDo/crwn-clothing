import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOOGLE_CART_HIDDEN
})

export const addItem = ( item ) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item                           // Đây sẽ là item mới được truyền vào thông qua action payload 
})

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})