import React from 'react'
import "./Hero.css";
import men from "../../assets/men.jpg"
import handicon from "../../assets/handicon.png";
import arrow from "../../assets/arrow.webp"
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>Best Deals! Best Prices</h2>
        
            <div className="hero-hand-icon">
            <img src={handicon} alt="handicon.png" height="60px" />
            </div>
            <p>Collection</p>
            <p>for everyone</p>
        </div>

        <div className="hero-latest-btn">
            <div>Latest Collections</div>
            <img src={arrow} alt="arrow.webp" height="30px" />
        </div>
        
        <div className="hero-right">
            <img src={men} alt="men.jpg" height="400px" />

        </div>
    </div>
  )
}

export default Hero