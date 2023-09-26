import React from "react";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../contexts/cart.context";


import './cart-dropdown.css'



const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () =>{
      navigate('/checkout')
    }
  
    return (
      <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Votre panier est vide</span>
          )}
        </div>
        <button onClick={goToCheckoutHandler}>Aller dans le panier</button>
      </div>
    );
  };
  
  export default CartDropdown;