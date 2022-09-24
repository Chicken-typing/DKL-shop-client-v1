import React from 'react'
  import Slider from '../../components/Slider'
import Popular from '../../components/Popular'

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
  const Data = [
    {    
        id: 1, 
        name: 'Sneaker',
        imgProduct: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/9-5-1647879684.jpg?crop=1.00xw:0.840xh;0,0.0453xh&resize=980:*',
        cost: "$140"
      },
      {    
        id: 2, 
        name: 'Nike Zoom Mercurial Superfly 9 Elite KM FG',
        imgProduct: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_608,c_limit/6099ee9d-b1ea-4e31-ae26-ab84689fab7a/nikecourt-zoom-pro-hard-court-tennis-shoes-vLKJ5T.png',
        cost: "$140"
      },
      {
        name: 'SKT T1 INPUT',
        imgProduct: 'https://i.pinimg.com/originals/c7/45/62/c74562aa6f95064391d3dd9cd44ff372.jpg',
        cost: "$140"
      },
      {
        name: 'SKT T1 OUTPUT',
        imgProduct: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_608,c_limit/2038d7ff-8926-4d65-a014-6d7151588e4f/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-cS7wct.png',
        cost: "$140"
      },
      {
        name: 'Sneaker1',
        imgProduct: 'https://i.pinimg.com/736x/24/9d/f2/249df2b0e06258cd06104cf857f7ae05.jpg',
        cost: "$140"
      },
      {
        name: 'Sneaker1',
        imgProduct: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNV5IfrqOhCF5LCvm7cGTfVB96BQnw1Xj_-w&usqp=CAU',
        cost: "$140"
      }
]
  return (
    <div className="main-page">
       
        <Slider  Data={DataSlider}/>
        <Popular data={Data}/>
        <Popular data={Data}/>
        <Popular data={Data}/>
      
    </div>
  )
}

export default MainPage