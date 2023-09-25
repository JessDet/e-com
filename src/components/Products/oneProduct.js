import React from 'react';
import { Link} from 'react-router-dom';

import "../Products/oneProd.css";



export default function OneProduct ({product}) {

    return(
        
        <div className="product_card">
            <div>
                <img src={product.image} alt={product.name} className="img_product"/>
            </div>
            <div>
                <h3>{product.name}</h3>
                <span>Prix : {product.prix} €</span>
            </div>
            <div>
               <Link to={`/detail/${product.id}`}> <button >Info produit</button></Link>
            </div>
        </div>
       
    )
}