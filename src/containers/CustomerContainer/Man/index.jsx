import React, { useState, useEffect } from 'react'
import Slider from '../../../components/Slider'
import Advertise from '../../../components/Advertise';
import Item from '../../../components/Item';
import Filter from '../../../components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../action';
import { BackTop } from 'antd';
import Waiting from '../../../pages/Waiting';
import axios from 'axios';

function Man() {

  const [loading, setLoading] = useState(false)
  const DataSlider = [
    {
      id: 1,
      img: 'https://i.pinimg.com/originals/ad/86/30/ad8630efb2a4b2acdf8f97e0841fe3e4.gif'
    },
    // {
    //     id: 2,
    //     img: 'https://wallpaperaccess.com/full/1597753.jpg'
    // },
    // {
    //     id: 3,
    //     img: "https://raritysniper.com/news/wp-content//uploads/2022/04/rtfkt-announces-metaverse-ready-nike-dunks-nfts-758x379.jpg"
    // },
    // {
    //     id: 4,
    //     img: "https://wallpapercave.com/wp/4DvmzwJ.jpg"
    // }
  ]
  const listAdvertise = [
    {
      id: 1,
      imgSrc: 'https://i.gifer.com/embedded/download/ku3.gif',
      title: 'Running on the Road',
      info: 'Hitting the pavement? You’ll want a shoe with extra cushioning that absorbs shock.',
    },
    {
      id: 2,
      imgSrc: 'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_455,c_limit/fa4aad57-a5ea-4ade-a03a-02ff1da968c9/running-shoe-finder.jpg',
      title: 'Racing on the Track',
      info: 'Selecting the Right Running Shoes for SupinatioFly on the track with racing flats, which are super light with little to no heel drop. Need traction? Go for running spikes.',
    },
    {
      id: 3,
      imgSrc: 'https://media3.giphy.com/media/mjHdtfDP25t7hRw8VT/200w.gif?cid=82a1493bsme82curxsi4ytg4hw3y2qj7h0qbu2lbupvjp705&rid=200w.gif&ct=g',
      title: 'Taking on the Trails',
      info: 'If you’re tackling the elements, try a shoe with extra traction and durability to run through all conditions with confidence.',
    },
  ]
  const [products, setProducts] = useState([])
  // useEffect(() => {
  //   axios.get(`https://633c4d6a74afaef164068be4.mockapi.io/products/product`)
  //     .then(res => {
  //       const products = res.data
  //       setProducts(products)
  //     })
  //     .catch(error => console.log(error))
  // })
  const dispatch = useDispatch();
  useEffect(() => {      
      dispatch(fetchProduct())
      setLoading(true)
  }, [])
  const res = useSelector(state => state.fetchProduct.products)

  return (
    <div>
      <Slider Data={DataSlider} />
      <h3 className='mt-[30px] text-center font-normal font-Helvetical text-3xl italic text-light-black'>More Information</h3>
      <Advertise DataInfo={listAdvertise} />
      <div className='contain xl:px-[160px] s:px-[40px] ss:px-[40px]'>
        <div className='flex justify-between'>
          <h2 className='mt-[20px] text-4xl font-medium font-Helvetical'>Man's Shoes</h2>
          <Filter />
        </div>
        <div className='list-product mt-[20px] mx-auto my-auto'>
          <div className='grid grid-cols-4  gap-y-[24px] gap-x-[24px] xl:grid-cols-4 sm:grid-cols-1 s:grid-cols-1 md:grid-cols-2'>
            {loading && res.map((info) => {
              return <Item info={info} />
            })}
          </div>
        </div>
      </div>
      <BackTop style={{right:'50px'}}/>
    </div>
  )
}

export default Man