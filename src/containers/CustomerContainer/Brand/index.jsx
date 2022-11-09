import React, {useState, useEffect} from 'react'
import Item from '../../../components/Item'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../action';
import { fetchAdvertise } from '../../../action/fetchAdvertises';
import { CardBrand } from './CardBrand';
import {Data} from '../../../Data/Data'


function Brand() {

    const [active, setActive] = useState("")


    const dispatch = useDispatch();
    useEffect(() => {      
        dispatch(fetchProduct())
        dispatch(fetchAdvertise())
    }, [])
    const res = useSelector(state => state.fetchProduct.products)
    const advertise = useSelector(state => state.fetchAdvertise.products)
    const data = [
        {
            image:
              'https://i.pinimg.com/474x/84/20/de/8420de8b5fe9def59b3b6ddd5a94f2ce.jpg',
            title: 'Best forests to visit in North America',
            category: 'NIKE',
          },
    ]
    const data1 = [
        {
            image:
              'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Hawaii beaches review: better than you think',
            category: 'beach',
          },
    ]
  return (
    <div>
        
       <div  className='flex justify-evenly mt-[20px]'>
       <div className=''>
            <CardBrand data={data} />
            <button className=' p-[15px] border-2 rounded-[15px] bg-gray-800' onClick={() => setActive('Nike')}>More Product</button>
        </div>
        <div>
            <CardBrand data={data1}/>
            <button className=' ' onClick={() => setActive('Adidas')}>More Product</button>
        </div>
       </div>
       <div className='contain xl:px-[160px] s:px-[40px] ss:px-[40px]  grid grid-cols-4  gap-y-[24px] gap-x-[24px] xl:grid-cols-4 sm:grid-cols-1 s:grid-cols-1 md:grid-cols-2'>
        {active ===  'Nike' && res.map((info) => {
            return <Item info={info} />
        })}
        {active === 'Adidas' && Data.map((info) => {
            return <Item info={info} />
        })}
       </div>   

    </div>
 
  )
}

export default Brand