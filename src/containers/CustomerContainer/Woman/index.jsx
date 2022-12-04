import React, { useState, useEffect } from 'react'
import Slider from '../../../components/Slider'
import Advertise from '../../../components/Advertise';
import Item from '../../../components/Item';
import Filter from '../../../components/Filter';
import { Data } from '../../../Data/Data'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../action';
import { BackTop } from 'antd';

function Woman() {

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
  const listAdvertise = [
    {
      id: 1,
      imgSrc: 'https://static.nike.com/a/images/w_1920,c_limit/316e0a43-18ef-4c45-b509-00fa6bf3fb9a/what-shoes-are-best-for-overpronation.jpg',
      title: 'Buying Guide',
      info: 'What Shoes Are Best for Overpronation?',
    },
    {
      id: 2,
      imgSrc: 'https://static.nike.com/a/images/w_1920,c_limit/f641db57-2c81-4211-ae87-7a77d708b49a/selecting-the-best-running-shoes-for-supination.jpg',
      title: 'Buying Guide',
      info: 'Selecting the Right Running Shoes for Supination',
    },
    {
      id: 3,
      imgSrc: 'https://static.nike.com/a/images/w_1920,c_limit/875af542-0ba8-4b55-9bb5-eb43a3c5729c/the-best-gear-for-running-in-the-rain.jpg',
      title: 'Buying Guide',
      info: 'Waterproof Running Gear for Rainy-Day Runs',
    },
  ]
 



 
  // useEffect(() => {
  //   axios.get(`https://633c4d6a74afaef164068be4.mockapi.io/products/product`)
  //   .then(res => {
  //     const products = res.data
  //     setProducts(products)
  //   })
  //   .catch(error => console.log(error))
  // })
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchProduct())
  }, [])
  const res = useSelector(state => state.fetchProduct.products)
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
    datas.filter((val) =>  val.brand === 'Nike')
    setProducts( datas.filter((val) => val.brand === "Nike"))

  }
  const filterAdidas = () => {
    setFilter('adidas')
    const datas = [...res]
    datas.filter((val) =>  val.brand === 'Adidas')
    setProducts( datas.filter((val) => val.brand === "Adidas"))
  }
  const all = () => {
    setFilter('all')
    setProducts(res)
  }
  return (
    <div>
      <Slider Data={DataSlider} />
      <Advertise DataInfo={listAdvertise} />
      <div className='contain xl:px-[160px] s:px-[40px] ss:px-[40px]'>
        <div className='flex justify-between '>
          <h2 className='mt-[20px] text-4xl font-medium font-Helvetical'>Woman's Shoes</h2>
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

export default Woman