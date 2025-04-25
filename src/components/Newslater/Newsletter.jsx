import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <div className="newsletter">
        <h3>Get Exclusive Offers on Your Email</h3>
        <p>Subscribe to our newsletter and stay updated</p>
        <input type="Email" placeholder='EmailId' />
        <button>Suscribe</button>
    </div>
  )
}

export default Newsletter