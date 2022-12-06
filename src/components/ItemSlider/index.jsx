import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../action';
import { Link } from 'react-router-dom'
import './style.scss'
function ItemSlider({item}) {

  const {id, name, imgProduct, brand, cost} = item
  const dispatch = useDispatch()
 
  return (
    <div   className="items" key={id} >       
        <img className='imgProduct' src={imgProduct} alt="" />
        <div className='overplayed'><input type="button" value='Add to cart' className='add' onClick={() =>dispatch(addToCart(item))}/></div>
        <Link to={`/products/${item.name}`} className='overplayss'><input type="button" value='More Detail' className='adds'/></Link>
        <div className="name-cost">
        <div className="costProduct">{cost}</div> 
        <div className="name font-Helvetical">
          <Link to={`/products/${item.name}`}>{name}</Link>
          <div className='type'>{brand}</div>
        </div>
        </div>
    </div>
  )
}

export default ItemSlider