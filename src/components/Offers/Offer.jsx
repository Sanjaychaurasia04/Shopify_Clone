import React from 'react'
import "./Offer.css"
import exclusiveimage from "../../assets/exclusiveimage.png"
const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1>Exclusive Offer</h1>
        <h1>Offers for You</h1>
        <p>Only On Best Sellers Products</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusiveimage} alt="" />
      </div>
    </div>
  )
}

export default Offer