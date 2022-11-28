import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart, removeFromCart} from '../../action';
import { useNavigate } from 'react-router-dom';



function Cart() {

  // UseState
    const [price, setPrice] = useState(0)
    const [total, setTotal] = useState(0)
    const [ship, setShip] = useState(0)

  // Function
  const navigate = useNavigate()
  const history = useNavigate();
  const handleAdd = (e) => {
    dispatch(addToCart(e));
  };
  const handleDel = (e) => {
    dispatch(removeFromCart(e));
    history("/cart");
  };

  const handleDelAll = id => {
    dispatch(deleteFromCart(id))
  }
const dispatch = useDispatch();
const data = useSelector(state => state.Cart.carts)

const subTotal = () => {
  let price = 0;
  data.map((item) =>{
      price = item.cost * item.quantity + price
  });
  setPrice(price);
};

const totalAll = () => {
  let price = 0
  let shipCost = ship
  data.map(item => {
    if(data.length > 0)
    {
      setShip(14)
      price = item.cost * item.quantity + shipCost + price
      setTotal(price)
    }
  })
}

useEffect(() => {
  {data.length === 0 && setShip(0)}
})

useEffect(() => {
  {data.length === 0 && setTotal(0)}
})

useEffect(()=>{
  subTotal();
},[subTotal])

useEffect(() => {
  totalAll()
}, [totalAll])



  return (
    <div className='py-14 px-10'>
      <div className='font-[800] text-gray-900 text-2xl'>Shopping Cart</div>
      <div className='flex'>
      <div className='w-[70%] px-4 pt-10 pb-16 sm:px-6 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] 
      lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24 lg:max-h-[30%]'>
        {data.length === 0 &&  <div className='flex '>
          <p className='lg:mt-28 lg:text-xl'>Your carts is empty</p>
                    <img src="https://media0.giphy.com/media/LOL2XB5O5slfFE4K3M/200w.webp?cid=ecf05e470zc7xrtrdfp9l64cjymmikqxd87pp814xr1ocht7&rid=200w.webp&ct=s" alt="" className='emptycart_img' style={{width:"15rem",padding:10}} /></div>}
        {/* Product List */}
        <div className='lg:col-span-2'>
        {data.map((item) => (
          <div className='w-[90%] mb-8  '
           key={item.id}>
            <div className='mb-8 lg:border-t lg:border-gray-300  '></div>

            <div className='flex w-[100%]'>
            <img src={item.imgProduct !== undefined && item.imgProduct} alt="" 
            className=' lg:h-[85%] lg:w-[35%] rounded-2xl mt-1 min-[370px]:h-[120px] min-[370px]:w-[100px] : '/>

            <div className='pl-[20px] lg:w-[35%]'>
            <div className=' lg:max-w-[100%] break-all font-[500] mb-2 text-lg'>{item.name}</div>
            {/* Color and Size */}
            <div className='flex '>
            <div className='text-gray-500 lg:border-r lg:border-gray-300 w-[40%]'>Green</div>
            <div className='text-gray-500 w-[40%] text-end'>Size 35</div>
            </div>
            {/* Cost */}
            <div className='mt-4 font-[500]'>{item.cost}</div>
            </div>

            <div className=' lg:ml-10 text-center lg:w-[30%]'>
              <div className='font-[500] text-lg lg:mb-2 wid'>Quantity</div>
              <div className="">
	                <button className="minus px-3 hover:bg-gray-button" onClick={item.quantity <= 1 ? () => handleDelAll(item.id) : () => handleDel(item)}>-</button>
                  <span className='lg:ml-2'>{item.quantity}</span>
	                <button className="plus px-3 hover:bg-gray-button" onClick={() => handleAdd(item)}>+</button>
              </div>
            </div>

                {/* Remove item */}
                <span className='lg:ml-[200px] ' >
                    <box-icon box-icon type='solid' name='trash-alt' onClick={() => handleDelAll(item.id)}></box-icon>
                </span>
            </div>          
          </div>
        ))}       
        </div>


        
      </div>
      <div className='bg-gray-bg max-w-sm h-[100%] grid lg:px-4 lg:py-4 lg:max-h[50%] w-[30%] lg:mt-16 rounded-xl' >
          <p className='font-[600] text-gray-800 text-xl'>Order Summary</p>

          {/* SubTotal */}
            <div className='flex w-[100%] '>
              <div className='flex-1 text-gray-600 text-lg'>Subtotal</div>
               <div className='flex-1 text-end text-lg text-gray-800 font-[400] lg:py-[2px]'>{`$${price}`}</div>              
            </div>
            <div className='mt-3 mb-3 lg:border-t lg:border-gray-400  '></div>


          {/* Shipping Cost   */}
            <div className='flex w-[100%]'>
               <div className='flex-1 text-gray-600 text-lg'>Shipping Cost</div>
               <div className='flex-1 text-end text-lg text-gray-800 font-[400] lg:py-[2px]'>{`$${ship}`}</div>
            </div>
            <div className='mt-3 mb-3 lg:border-t lg:border-gray-400 '></div>


          {/* Total   */}
            <div className='flex w-[100%]'>
               <div className='flex-1 font-[600] text-gray-800 text-lg'>Order Total</div>
               <div className='flex-1 text-end text-lg text-gray-800 font-[400] lg:py-[2px]'>{`$${total}`}</div>
            </div>


             {/* Checkout  */}
          <button className='w-[100%] bg-indigo-600 text-white lg:mt-5 items-center justify-center rounded-md border border-transparent hover:bg-indigo-700
                  focus:outline-none focus:ring-2  focus:ring-indigo-500 focus:ring-offset-2 lg:p-4'
                  onClick={() => navigate('/checkout')}
                  >Checkout</button>
          </div>

         



      </div>
    </div>
  )
}

export default Cart