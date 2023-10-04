
import { Routes, Route, Navigate, Outlet} from 'react-router-dom';
import './App.css';
import DetailProduct from './components/Products/DetailProduct';
import ProductList from './pages/Shop/ProductList';
import Checkout from './pages/Checkout/Checkout';
import LoginForm from './pages/Users/loginForm';
import RegisterForm from './pages/Users/registerForm';
import React, { useState } from 'react';
import Profil from './pages/Users/profil';

export default function App({products, users}) {

  // const [loggedIn, setloggedIn] = useState(false);
  // console.log(products);
  return (

    <Routes>
      

      <Route path="/" element={ <ProductList/>  }/>
      <Route path="/detail/:id" element={<DetailProduct products={products}/>} />
      <Route path="/checkout" element={<Checkout/>} /> 
      <Route path="/login/" element={<LoginForm/>} />
      <Route path="/register" element={<RegisterForm/>} />
      <Route path="/profil/:id" element={<Profil users={users}/>} />
     
      

    </Routes>
  );
  
}


