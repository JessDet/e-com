
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DetailProduct from './components/Products/DetailProduct';
import ProductList from './components/Products/ProductList';
import ShopCart from './components/Shop/ShopCart';

export default function App({products}) {

  console.log(products);
  return (
    <Routes>
  
      <Route path="/" element={ <ProductList/>  } />
      <Route path="/detail/:id" element={<DetailProduct products={products}/>} />
      <Route path="/shopCart" element={<ShopCart/>} />

    </Routes>
  );
}


