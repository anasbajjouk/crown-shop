import React from 'react';
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>

);

//You can distructure the state like this ({cart:{ cartitems } })
const mapStateToPros = state => ({
    cartItems: state.cartItems
});

export default connect(mapStateToPros)(CartDropdown);
