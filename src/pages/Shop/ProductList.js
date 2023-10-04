import OneProduct from "../../components/Products/oneProduct";
// import { products } from "../../data/products"
import "../Shop/productList.css"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { useState, useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";



export default function ProductList (){

    const { products } = useContext(ProductsContext)

    const [filter, setFilter] = useState("");

    const handleInput = (e) => {
      const search = e.target.value;
      setFilter(search.trim().toLowerCase());
    }


    return(
        <div>
            <div>
                <FaMagnifyingGlass/>
                <input onInput={handleInput} type="text" placeholder="Rechercher" className="flex-fill"/>
            </div>
            <div className="list_page">
                {
                    products.filter(s => s.name.toLowerCase().startsWith(filter)).map((product) => (
                    <OneProduct key={product.id} product={product}/>   
                    )
                ) 
                }    
            </div>
        </div>
 )
}