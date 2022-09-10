import React from 'react'

export default function Item({info}) {
  const {name, imgProduct, cost} = info
  return (
    <div className="list-popular">       
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
