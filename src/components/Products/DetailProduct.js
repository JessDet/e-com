import React from 'react';
import { useState } from 'react';
import "../Products/detailProd.css";
import { useParams } from 'react-router-dom';
import { products } from "../../data/products"



export default function DetailProduct (){ 
    const { id } = useParams();

    const product = products && products.find(product => product.id === parseInt(id));

    // Si le produit n'est pas trouvé, affichage d'un message d'erreur
    if (!product) {
      return <div>Produit non trouvé</div>;
    }

    const [number, setNumber] = useState('')

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
                    <button> - </button>
                    <input type='number' value={number}/> 
                    <button> + </button>
                </div>
                <button type='submit'>panier</button>
            </div>



            
     
        </div>
    )
}