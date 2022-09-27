import React from 'react'
import './style.scss'

export default function Item({info}) {
  const {id, name, imgProduct, cost} = info
  return (
    <div className="item" key={id}>       
        <img className='imgProduct' src={imgProduct} alt="" />
        <div className="name-cost">
        <div className="costProduct">{cost}</div> 
        <div className="name">
          <a href=" ">{name}</a>
        </div>
        </div>
    </div>
  )
}
