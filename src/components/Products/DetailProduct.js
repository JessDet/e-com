import React from 'react';
import { useState, useContext } from 'react';
import "../Products/detailProd.css";
import { useParams } from 'react-router-dom';
import { products } from "../../data/products"
import { ProductsContext } from '../../contexts/products.context';
import { CartContext } from '../../contexts/cart.context';



export default function DetailProduct (){ 
    const { id } = useParams();

    const { produc } = useContext(ProductsContext);

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    const product = products && products.find(product => product.id === parseInt(id));

    // Si le produit n'est pas trouvé, affichage d'un message d'erreur
    if (!product) {
      return <div>Produit non trouvé</div>;
    }




    return(
        
        <div className="detail_body">
            <div className='detail_img'>
                <img src={product.image} alt={product.name} className='detail_imgProd' width={"500px"}/>
            </div>
            <div className='detail_descr'>
                <div className='detail_detail'>
                    <p> {product.detail} </p>
                </div>
                <div>
                    <h3>{product.name }</h3>
                    <span>Prix : { product.prix } €</span>
                </div>
                <div>
                    {/* <input type='number' value={quantity} min="0" onChange={(e) => setQuantity(parseInt(e.target.value))}/>  */}
                </div>
                <button onClick={addProductToCart}>ajouter au panier</button>
            </div>



            
     
        </div>
    )
}