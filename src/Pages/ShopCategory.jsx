import React,{useContext} from 'react'
import "./ShopCategory1.css"
import { ShopContext } from '../components/Context/ShopContext'
import Item from '../components/Items/Item'


const ShopCategory = (props) => {
    const {all_product} =useContext(ShopContext)
  
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />

      <div className="allimagesbycategory">
        {all_product.map((item ,i)=>{
          if(props.category === item.category){
            return <Item key={i} id ={item.id} name ={item.name} image ={item.image} new_price ={item.new_price} old_price ={item.old_price}  />;
          }
          else return null;
        })}
        
        
      </div>
    </div>

  )
}

export default ShopCategory






