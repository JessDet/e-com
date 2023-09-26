import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import "./checkout.css"
import { CheckoutItem } from '../../components/checkout-item/checkout-item';



const Checkout= () => {

    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <div className="shop_body">
            <h1 className="cart_title">Panier</h1>
            <div className='checkout-container'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Produit</span>
                    </div>
                    <div className='header-block'>
                        <span>Reference</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantité</span>
                    </div>
                    <div className='header-block'>
                        <span>Prix</span>
                    </div>
                    <div className='header-block'>
                        <span>Suppr</span>
                    </div>
                </div>

                
                {cartItems.map((cartItem) => {
                        return (
                          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>  
                )})}

                <span className='Total'>Total: € {cartTotal}</span>
            </div>
        </div>
        

            

           
    );
};

export default Checkout;