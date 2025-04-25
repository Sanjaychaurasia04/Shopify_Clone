import React ,{useContext} from 'react'
import { ShopContext } from '../components/Context/ShopContext'
import { useParams } from 'react-router-dom';
import Productdispaly from '../components/Productdisplay/Productdispaly';
import Bedcrums from '../components/Bedcrums/Bedcrums';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> String(e.id) === productId)

  return (
    <div>
      <Bedcrums product ={product}/>
      <Productdispaly product ={product}/>
    </div>
  )
}

export default Product