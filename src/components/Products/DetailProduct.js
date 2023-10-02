import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import "../Products/detailProd.css";
import { useParams } from 'react-router-dom';
// import { products } from "../../data/products"
import { ProductsContext } from '../../contexts/products.context';
import { CartContext } from '../../contexts/cart.context';



export default function DetailProduct (){ 
    const { id } = useParams();
    const [oneProduct, setOneProduct] = useState([])

    const { produc } = useContext(ProductsContext);

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(oneProduct);

    // const product = products && products.find(product => product.id === parseInt(id));

    // Si le produit n'est pas trouvé, affichage d'un message d'erreur
    // if (!product) {
    //   return <div>Produit non trouvé</div>;
    // }

    const fetchdataproduct = () => {
        axios.get (`http://127.0.0.1:8001/api/products/${id}`)
        .then((resp) => {
        //   console.log(resp.data);
          setOneProduct(resp.data)
        })
      }
    
      useEffect (() => {
        fetchdataproduct()
      },[])




    return(
        
        <div className="detail_body">
            <div className='detail_img'>
                <img src={oneProduct.image} alt={oneProduct.name} className='detail_imgProd' width={"500px"}/>
            </div>
            <div className='detail_descr'>
                <div className='detail_detail'>
                    <p> {oneProduct.detail} </p>
                </div>
                <div>
                    <h3>{oneProduct.name }</h3>
                    <span>Prix : { oneProduct.price } €</span>
                </div>
                <div>
                    {/* <input type='number' value={quantity} min="0" onChange={(e) => setQuantity(parseInt(e.target.value))}/>  */}
                </div>
                <button onClick={addProductToCart}>ajouter au panier</button>
            </div>



            
     
        </div>
    )
}