import React, {useState, useEffect} from 'react'
import Slider from '../../components/Slider'
import axios from 'axios';

function Kid() {
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
const [slider, setSlider] = useState([])
useEffect(() => {
  axios.get(`https://633c4d6a74afaef164068be4.mockapi.io/products/dataSlider`)
  .then(res => {
    const slider = res.data
    setSlider(slider)
  })
  .catch(error => console.log(error))
})

  return (
    <div>
       {/* {slider.map((info) => {
                    return <Slider Data={slider}/>
                  } )} */}
                  <Slider Data={slider}/>
    </div>
  )
}

export default Kid