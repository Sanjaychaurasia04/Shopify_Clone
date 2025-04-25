import React, { useContext } from 'react';
import './Productdisplay.css';
import star from '../../assets/star.jpg';
import start_half from '../../assets/star_half.png';
import { ShopContext } from '../Context/ShopContext';

const Productdispaly = (props) => {
  const { product } = props;
  const {addToCart} =useContext(ShopContext);

  return (
    <div className="Productdispaly">
      {/* Left: Thumbnail Images */}
      <div className="productdisplay-left">
        <img src={product.image} alt="" height="100px" />
        <img src={product.image} alt="" height="100px" />
        <img src={product.image} alt="" height="100px" />
        <img src={product.image} alt="" height="100px" />
      </div>

      {/* Right: Main Content */}
      <div className="productdisplay-right">
        <div className="main_image">
          <img src={product.image} alt="" height="400px" />
        </div>

        <h1>{product.name}</h1>

        <div className="star_icon">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={start_half} alt="half star" />
          <p>(130)</p>
        </div>

        <div className="price">
          <p>Price:</p>
          <div className="old_price">${product.old_price}</div>
          <div className="new_price">${product.new_price}</div>
        </div>

        <div className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          temporibus dignissimos vero fuga doloribus quidem error doloremque...
        </div>

        <div className="select-size">
          <h2>Select Size</h2>
          <div className="display-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button onClick ={()=>{addToCart(product.id)}}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Productdispaly;
