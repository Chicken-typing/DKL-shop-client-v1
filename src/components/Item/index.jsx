import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../../action';
import './style.scss'

export default function Item({info}) {

  const {id, name, image, brand, price} = info
  const dispatch = useDispatch();


 
  return (
    <div  className="item" key={id} >       
        <img className='imgProduct' src={image} alt="" />
        <div className='overplay'><input type="button" value='Add to cart' className='add' onClick={() =>dispatch(addToCart(info))}/></div>
        <Link to={`/products/${info.name}`} className='overplays'><input type="button" value='More Detail' className='adds' 
        /></Link>
        <div className="name-cost">
        <div className="costProduct">{price}</div> 
        <div className="name font-Helvetical">
          <Link to={`/products/${info.name}`}>{name}</Link>
          <div className='type'>{brand}</div>
        </div>
        </div>
    </div>
  )
}
