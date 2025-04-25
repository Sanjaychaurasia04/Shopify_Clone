import React from 'react'
import data_product from '../../assets/data'
import Item from '../Items/Item'
import "./Popular.css"
const Popular = () => {
  return (
    <div className="popular">
        <h1>Popular in Women</h1>
        <hr/>

        <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id ={item.id} name ={item.name} image ={item.image}
                new_price ={item.new_price} old_price ={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular