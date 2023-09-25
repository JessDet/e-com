import { Link } from 'react-router-dom';
import '../components/header.css'
import logo from "../assets/logo/logo2trans.png";
import {BiCart} from "react-icons/bi"

export default function Header (){
    return(
        <header className='header_bloc'>
        <div className="logo_title">
          <Link to={`/`}><img src={logo} alt="logo du site"  className='logo'/></Link>
        </div>
        <div className='icon_header'>
        <Link to={`/ShopCart`}><BiCart /></Link> 
        </div>
      </header>
    )
}