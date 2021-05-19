import {combineReducers} from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers ({
    user: userReducer,
    cart: cartReducer 
})


// Root reducer gộp tất cả các reducer nhỏ hơn lại