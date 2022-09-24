import React from 'react'
import './style.scss'
export default function Item({info}) {
  const { img, name, cost } = info
  console.log(info)
  console.log(cost)

  return (
    <div className="list-popular">       
        <img className='imgProduct' src={img} alt="" />
        <div className="name-cost">
        <div className="costProduct">{cost}</div> 
        <div className="name">
          <a href=" ">{name}</a>
        </div>
        </div>
    </div>
  )
}
