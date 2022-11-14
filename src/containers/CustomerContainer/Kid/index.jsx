import React, { useState, useEffect } from 'react'
import Slider from '../../../components/Slider'
import axios from 'axios';
import Advertise from '../../../components/Advertise';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertise } from '../../../action/fetchAdvertises';
import {fetchProduct} from "../../../action/fetchProducts"
import Item from '../../../components/Item';
import Filter from '../../../components/Filter';

import {BackTop} from 'antd'


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

  // useEffect(() => {
  //   axios.get(`https://633c4d6a74afaef164068be4.mockapi.io/products/dataSlider`)
  //     .then(res => {
  //       const slider = res.data
  //       setSlider(slider)
  //     })
  //     .catch(error => console.log(error))
  // })
  const dispatch = useDispatch();
  useEffect(() => {      
    dispatch(fetchAdvertise())
      dispatch(fetchProduct())
  }, [])
  const res = useSelector(state => state.fetchProduct.products)
  const advertise = useSelector(state => state.fetchAdvertise.products)
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState()

  useEffect(() => {
    setProducts(res)
  }, [res])
  const filterHighLow = () => {
      setFilter('HighLow')
      const datas = [...res]
      datas.sort((a,b) => {
        return a.cost - b.cost
      })
      setProducts(datas)
  }
  const filterLowHigh = () => {
    setFilter('lowhigh')
      const datas = [...res]
      datas.sort((a,b) => {
        return b.cost - a.cost
      })
      setProducts(datas)

  }
  const filterNike = () => {
    setFilter('nike')
    const datas = [...res]
    datas.filter((val) =>  val.brand === 'tan')
    setProducts( datas.filter((val) => val.brand === "tan"))

  }
  const filterAdidas = () => {
    setFilter('adidas')
    const datas = [...res]
    datas.filter((val) =>  val.brand === 'tan')
    setProducts( datas.filter((val) => val.brand === "olive"))
  }
  const all = () => {
    setFilter('all')
    setProducts(res)
  }
  return (
    <div>
      <Advertise DataInfo={advertise} />
      <h3 className='mt-[30px] text-center font-normal font-Helvetical text-3xl italic text-light-black'>More Product</h3>
      <div className='contain xl:px-[160px] s:px-[40px] ss:px-[40px]'>
        <div className='flex justify-between'>
          <h2 className='mt-[20px] text-4xl font-medium font-Helvetical'>Kid's Shoes</h2>
          <Filter filterHighLow={filterHighLow} filterLowHigh={filterLowHigh} filterNike={filterNike} filterAdidas={filterAdidas} all={all}/>
        </div>
        <div className='list-product mt-[20px] mx-auto my-auto'>
          <div className='grid grid-cols-4  gap-y-[24px] gap-x-[24px] xl:grid-cols-4 sm:grid-cols-1 s:grid-cols-1 md:grid-cols-2'>
          {products.map((info) => {
              return <Item info={info} />
            })}
            {filter === 'HighLow' && products.map((info) => {
              return <Item info={info} />
            })}
            {filter === 'lowhigh' && products.map((info) => {
              return <Item info={info} />
            })}
            {filter === 'nike' && products.map((info) => {
              return <Item info={info} />
            })}
             {filter === 'adidas' && products.map((info) => {
              return <Item info={info} />
            })}
             {filter === 'all' && products.map((info) => {
              return <Item info={info} />
            })}
          </div>
        </div>
      </div>

      <BackTop style={{right:'50px'}}/>

    </div>
  )
}

export default Kid