import React from 'react'
import "./Footer.css"
import instagram from "../../assets/instagram.jpeg"
import whatsapp from "../../assets/whatsapp.jpeg"
import youtube from "../../assets/youtube.jpeg"

import logo from "../../assets/logo.jpg"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="" />
            <li>About</li>
            <li>Contact</li>
            <li>About Componey</li>
            <li>Branches</li>
            <li>More</li>
        </div>
        <div className="social">
            <li><img src={youtube} alt="" /></li>
            <li><img src={whatsapp} alt="" /></li>
            <li><img src={instagram} alt="" /></li>

        </div>
        
    </div>
  )
}

export default Footer