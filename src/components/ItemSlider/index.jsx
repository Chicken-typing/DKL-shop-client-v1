import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../action';
import { Link } from 'react-router-dom'
import './style.scss'
function ItemSlider({item}) {

  const {_id, name, image, brand, price} = item
  const dispatch = useDispatch()
 
  return (
    <div   className="items" key={_id} >       
        <img className='imgProduct' src={image} alt="" />
        <div className='overplayed'><input type="button" value='Add to cart' className='add' onClick={() =>dispatch(addToCart(item))}/></div>
        <Link to={`/products/${item.name}`} className='overplayss'><input type="button" value='More Detail' className='adds'/></Link>
        <div className="name-cost">
        <div className="costProduct">{price}</div> 
        <div className="name font-Helvetical">
          <Link to={`/products/${item.name}`}>{name}</Link>
          <div className='type'>{brand}</div>
        </div>
        </div>
    </div>
  )
}

export default ItemSlider