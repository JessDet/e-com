
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DetailProduct from './components/Products/DetailProduct';
import ProductList from './pages/Shop/ProductList';
import Checkout from './pages/Checkout/Checkout';

export default function App({products}) {

  console.log(products);
  return (
    <Routes>
  
      <Route path="/" element={ <ProductList/>  } />
      <Route path="/detail/:id" element={<DetailProduct products={products}/>} />
      <Route path="/checkout" element={<Checkout/>} />

    </Routes>
  );
}


