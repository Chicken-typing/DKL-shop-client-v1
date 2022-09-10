import React from 'react'
import './style.scss'
function ListPopular({info}) {
    const {name, imgProduct, cost} = info
  return (
    <div className="list-popular">       
        <img className='imgProduct' src={imgProduct} alt="" />
        <div className="name-cost">
        <div className="costProduct">{cost}</div> 
        <div className="name">
          <a href="">{name}</a>
        </div>
        </div>
        {/* <div>
           {data.map(item => {
                return <p className="name">{item.name}</p>
                <p className="costProduct">{cost}</p> 
             
           })}
        </div> */}
        {/* <div className="img-brand">{img}</div>
        <div className="img-product">{imgProduct}</div>
        <p className="costProduct">{cost}</p> */}
    </div>
  )
}

export default ListPopular