import React from 'react'
import {connect} from 'react-redux'

import {clearItem} from '../../redux/cart/cart.action'
import {addItem,removeItem} from '../../redux/cart/cart.action'
import './checkout-item.style.scss'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => { //Khai báo các props ở đây
    const {name, price, quantity, imageUrl} = cartItem //lấy các giá trị gán vào cartItem
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
        <span className="price">${price}</span>
        <span className="remove-button" onClick={() => clearItem(cartItem)}>&#10006;</span>
    </div>
)}

const mapDispatchToProps = dispatch => ({ //gọi action và truyền vào thành props
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)