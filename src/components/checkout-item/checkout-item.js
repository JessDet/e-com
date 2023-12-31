import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.css';

export const CheckoutItem = ({cartItem}) =>
    {
    const {name, quantity, image, price} = cartItem
    const { addItemToCart, removeItemToCart, clearItemToCart} = useContext(CartContext)

    const clearItemHandler = () => clearItemToCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemToCart(cartItem)

return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={image} alt={`${name}`}/>
        </div>
        
        <span className='name'>{name}</span>
       
        <div className='quantity'>
            <div onClick={removeItemHandler}>&#10094;</div>
        
            <span >{quantity}</span>
        
            <div onClick={addItemHandler}>&#10095;</div>
        </div>

        <span className='price'>{price}</span>

        <div className='remove-button'onClick={clearItemHandler}>&#10005;</div>
        

    </div>
    
)}