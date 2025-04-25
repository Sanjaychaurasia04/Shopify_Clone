import React from 'react'
import "./Navbar.css"
import { useState } from 'react'
import logo from '../assets/logo.jpg';
import cart from '../assets/cart.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu ,setMenu] =useState("home");

  return (
    <div>
        <div className="navbar">
            <div className="logoimage">
                <img src={logo} alt="logo.jpg" />
                <p>Shopify</p>
            </div>
            <ul className='list'>
                <li onClick ={() =>{setMenu("home")}}><Link style ={{textDecoration:"none"}} to="/">Home</Link> {menu ==="home" ? <hr/>:<></>}</li>
                <li onClick ={() =>{setMenu("mens")}}><Link style ={{textDecoration:"none"}} to="/mens">Mens</Link> {menu ==="mens" ? <hr/>:<></>}</li>
                <li onClick ={() =>{setMenu("womens")}}><Link style ={{textDecoration:"none"}} to="/womens">Womens</Link> {menu ==="womens" ? <hr/>:<></>}</li>
                <li onClick ={() =>{setMenu("kids")}}><Link style ={{textDecoration:"none"}} to="/kids">Kids</Link> {menu ==="kids" ? <hr/>:<></>}</li>
            </ul>
            <div className="login">
                <Link to ="/login"><button>Login</button></Link>
            </div>
            <div className="cart">
                <Link to="/cart"><img src={cart} alt="cart.jpeg" /></Link>
                
                <div className="zero">0</div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
