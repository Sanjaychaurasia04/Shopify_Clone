import React from 'react'
import "./Bedcrums.css"
import arrow from "../../assets/arrow.webp"
import Product from '../../Pages/Product'


const Bedcrums = (props) => {
    const {product} =props;

  return (
    <div className="Bedcrums">
        Home <img src={arrow} alt="" height ="10px"/> Shop <img src={arrow} alt="" height ="10px" />{product.category} <img src={arrow} alt="" height ="10px" /> {product.name} <img src={arrow} alt="" height ="10px" />
    </div>
  )
}

export default Bedcrums