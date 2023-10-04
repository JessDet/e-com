import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchdataproduct = () => {
    axios.get ('http://127.0.0.1:8000/api/products')
    .then((resp) => {
      // console.log(resp.data);
      setProducts(resp.data['hydra:member'])
    })
  }

  useEffect (() => {
    fetchdataproduct()
  },[])

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};