import React from "react";

import'./cart-item.css'


const CartItem = ({ cartItem }) => {
    const { image, prix, name, quantity } = cartItem;
  
    return (
      <div className='cart-item-container'>
        <img src={image} alt={`${name}`} />
        <div className='item-details'>
          <span className='name'>{name}</span>
          <br/>
          <span className='price'>
            {quantity} x € {prix}
          </span>
        </div>
      </div>
    );
  };
  
  export default CartItem;