import React from 'react'
import Slider from '../../components/Slider'
import ListPopular from '../../components/ListPouplar'
import News from './News'
import {DataPopular} from '../../Data/DataPopular'
import ListNavigation from '../ListNavigation'
import { Outlet } from 'react-router-dom'
function MainPage() {

  const DataSlider = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
    },
    {
        id: 2,
        img: 'https://wallpaperaccess.com/full/1597753.jpg'
    },
    {
        id: 3,
        img: "https://raritysniper.com/news/wp-content//uploads/2022/04/rtfkt-announces-metaverse-ready-nike-dunks-nfts-758x379.jpg"
    },
    {
        id: 4,
        img: "https://wallpapercave.com/wp/4DvmzwJ.jpg"
    }
]


  return (
    <div className="main-page">
        <Slider  Data={DataSlider}/>
        <ListPopular dataPopular={DataPopular}/>
        <News/>
    </div>
  )
}

export default MainPage