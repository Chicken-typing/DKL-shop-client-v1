import React from 'react'
import Popular from '../Popular'
import './style.scss'

function ListPopular({dataPopular}) {
  return (
    <section className="popular-container">
        {dataPopular.map((item, index) => (
            <div className="container">
            <h3 className="label font-medium text-gray-500 text-2xl">{item.title}</h3>
            <div className="content">
            <img className='main-img'  alt=""  style={{backgroundImage: `url(${item.img})`}}/>
            <Popular data={item.data}/>
            </div>
            </div>
        ))}
    
   
    
</section>
  )
}

export default ListPopular