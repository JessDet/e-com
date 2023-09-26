import React, { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/icones/shopping-bag.svg';


import './cart-icon.css'
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart_icon_container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping_icon'/>
            <span className='item_count'>{cartCount}</span>
        </div>
    )

}

export default CartIcon;