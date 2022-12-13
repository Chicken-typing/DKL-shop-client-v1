import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemSlider from '../ItemSlider';
import './style.scss'
import { style } from '@mui/system';
function Popular({data}) {

    let slidesToShow = 5;

  const PreviousBtn = (props) => {
    const { className, onClick, currentSlide } = props;
    return (
      <>
        {currentSlide !== 0 && (
          <div className={className} onClick={onClick} style={{ position: 'absolute', left: '-17px', bottom: '-150px', zIndex: '40'}} >    
            <box-icon type='solid' name='left-arrow-square' size='lg'></box-icon>
          </div>

        )}
      </>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick, slideCount, currentSlide } = props;
    return (
      <>
        {currentSlide !== slideCount - slidesToShow && (
          <div className={className} onClick={onClick} style={{ position: 'absolute', right: '-44px' ,zIndex: '40'}} >     
          <box-icon name='right-arrow-square' type='solid' size='lg'></box-icon> 
          {/* <img src="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm4 6h5V7l5 5-5 5v-4H7v-2z" alt="" />                     */}
          </div>
        )}
      </>
    );
  };
  const settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]      
};

  return (
    <div className='info'>
          <Slider {...settings}>
          {data.map(item => {
          return <ItemSlider  item={item}/>
          })} 
          </Slider>        
        </div>
  )
}

export default Popular