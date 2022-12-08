import React from 'react'
import Popular from '../Popular'
import './style.scss'
import { DataPopular } from '../../Data/DataPopular'


function ListPopular() {


  return (
    <section className="popular-container">
       
            <div className="container">
            <h3 className="label font-medium text-gray-500 text-2xl">Popular Right Now</h3>
            <div className="content">
            <img className='main-img'  alt=""  style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1514989771522-458c9b6c035a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlrZSUyMGFpciUyMG1heHxlbnwwfHwwfHw%3D&w=1000&q=80" + ")"}}/>
            <Popular data={ DataPopular}/>
            </div>
            </div>

            <div className="container">
            <h3 className="label font-medium text-gray-500 text-2xl">Maybe You Like It</h3>
            <div className="content">
            <img className='main-img'  alt=""  style={{backgroundImage: "url(" +"https://p1.pxfuel.com/preview/839/920/901/blue-adidas-shoes.jpg" + ")"}}/>
            <Popular data={ DataPopular}/>
            </div>
            </div>

            <div className="container">
            <h3 className="label font-medium text-gray-500 text-2xl">The Essentials</h3>
            <div className="content">
            <img className='main-img'  alt=""  style={{backgroundImage: "url("+ "https://images.unsplash.com/photo-1613740104907-d537a85e1274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80" + ")"}}/>
            <Popular data={ DataPopular}/>
            </div>
            </div>

            <div className="container">
            <h3 className="label font-medium text-gray-500 text-2xl">More Nike</h3>
            <div className="content">
            <img className='main-img'  alt=""  style={{backgroundImage: "url("+ "https://i.pinimg.com/736x/fd/90/42/fd90420a0a2755d14ea4a15e081d37b6--nike-sneakers-nike-air-max.jpg" + ")"}}/>
            <Popular data={ DataPopular}/>
            </div>
            </div>

    
</section>
  )
}

export default ListPopular