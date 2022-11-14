import React from 'react'
import './style.scss'

export default function Item({info}) {

  const {id, name, imgProduct, brand, cost} = info
  return (
    <div className="item" key={id}>       
        <img className='imgProduct' src={imgProduct} alt="" />
        <div className="name-cost">
        <div className="costProduct">{cost}</div> 
        <div className="name font-Helvetical">
          <a href=" ">{name}</a>
          <div className='type'>{brand}</div>
        </div>
        </div>
    </div>
  )
}
