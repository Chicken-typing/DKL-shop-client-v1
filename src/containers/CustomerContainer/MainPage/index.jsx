import React from 'react'
import Slider from '../../../components/Slider'
import ListPopular from '../../../components/ListPouplar'
import News from './News'
import { DataPopular } from '../../../Data/DataPopular'
import { BackTop } from 'antd';
import './style.scss'
import MainBackground from '../../../components/MainBackground'
function MainPage() {



  return (
    <div className="main-page max-w-[100%] ">
      <div id='popular' >
        <div className='popular_container m-s:px-[10px] '>
        <MainBackground />
        <ListPopular dataPopular={DataPopular} />
        </div>
     </div>
      <div id='news'  className='justify-center items-center'><News /></div>
      <BackTop style={{right:'50px'}}/>
    </div>
  )
}

export default MainPage