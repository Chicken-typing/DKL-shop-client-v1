import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../action';
import { Link } from 'react-router-dom'
import './style.scss'
import { DollarCircleOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

function ItemSlider({ item }) {

  const { _id, name, defaultImage, brand, price } = item
  const dispatch = useDispatch()

  return (
    <div className="items" key={_id} >
      <img className='imgProduct' src={defaultImage.thumbUrl} alt="" />
      <div className='overplayed'><input type="button" value='Add to cart' className='add' onClick={() => dispatch(addToCart(item))} /></div>
      <Link to={`/products/${item.name}`} className='overplayss'><input type="button" value='More Detail' className='adds' /></Link>
      <div className="name-cost">
        <div className="costProduct"><DollarCircleOutlined /> {price}</div>
        <div className="name font-Helvetical">
          <Typography.Paragraph ellipsis >{name}</Typography.Paragraph>
          <div className='type'>{brand}</div>
        </div>
      </div>
    </div>
  )
}

export default ItemSlider