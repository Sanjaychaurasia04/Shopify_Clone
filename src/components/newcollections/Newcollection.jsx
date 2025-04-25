import React from 'react'
import Item from "../Items/Item"
import "./Newcollection.css"
import Newcollectiondata from './Newcollectiondata'
const Newcollection = () => {
  return (
    <div className="newcollection">
      <h1>Welcome to new Collections</h1>
      <hr/>
      
      <div className="newcollection-item">
        {
            Newcollectiondata.map((item ,i) =>{
                return <Item key={i} id ={item.id} name ={item.name} 
                image ={item.image} new_price ={item.new_price} 
                old_price ={item.old_price} />
            })
        }
        </div>
    </div>
  )
}

export default Newcollection