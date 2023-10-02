import { Link } from 'react-router-dom';

import CartIcon from './cart-icon/cart-icon';
import CartDropdown from './cart-dropdown/cart-dropdown';
import { CartContext } from '../contexts/cart.context';


import '../components/header.css'
import './cart-dropdown/cart-dropdown.css'
import logo from "../assets/logo/logo3.png";
import { useContext } from 'react';



export default function Header (){

const { isCartOpen } = useContext(CartContext);

    return(
        <header className='header_bloc'>
        <div className="logo_title">
          <Link to={`/`}><img src={logo} alt="logo du site"  className='logo'/></Link>
        </div>
        <div className="logo_title">
          <Link to={`/login`}><h3>CONNEXION</h3></Link>
        </div>
        <div className="logo_title">
          <Link to={`/register`}><h3>INSCRIPTION</h3></Link>
        </div>
        <div className="logo_title">
          <Link to={`/profil`}><h3>PROFIL</h3></Link>
        </div>
        <div className='icon_header'>
        <CartIcon />
        </div>
        {isCartOpen && <CartDropdown/> }
      </header>
    )
}