import React, { useState } from "react";
import { Card, Space, Button } from "antd";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



function PlaceOrder({onClickBack, onClickNext}) {
  const data = useSelector((state) => state.Cart.carts);
  const shipping = useSelector((state) => state.ShippingInfo);
  const payment = useSelector(state => state.PaymentMethod.paymentMethod)
  const navigate = useNavigate()

  const handleBack = () => {
    onClickBack()
    navigate('/checkout/payment')
  }
const handleNext = () => {
  onClickNext()

}

  return (
    <div>
      <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Preview Order
      </h1>
      <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3  lg:gap-x-10  lg:pt-16 lg:pb-24">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          {/* <div>{`Name: ${shipping.shippingAddress.fullName}`}</div>
          <div>{`Addres: ${shipping.shippingAddress.address}`}</div> */}
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:col-span-1 lg:mt-0">
          <form className="mt-10" onSubmit={(e) => e.preventDefault()}>
            {/* Colors */}


            <div className='bg-gray-bg w-[100%] lg:w-[100%] h-[100%] px-2 lg:px-4 lg:py-4 lg:max-h[50%]  rounded-xl' >
          <p className='font-[600] text-gray-800 text-xl'>Order Summary</p>

          {/* SubTotal */}
            <div className='flex w-[100%] '>
              <div className='flex-1 text-gray-600 text-lg'>Subtotal</div>
               <div className='flex-1 text-end text-lg text-gray-800 font-[400] lg:py-[2px]'>price</div>              
            </div>
            <div className='mt-3 mb-3 lg:border-t lg:border-gray-400  '></div>


          {/* Shipping Cost   */}
            <div className='flex w-[100%]'>
               <div className='flex-1 text-gray-600 text-lg'>Shipping Cost</div>
               <div className='flex-1 text-end text-lg text-gray-800 font-[400] lg:py-[2px]'>ship</div>
            </div>
            <div className='mt-3 mb-3 lg:border-t lg:border-gray-400 '></div>


          {/* Total   */}
            <div className='flex w-[100%]'>
               <div className='flex-1 font-[600] text-gray-800 text-lg'>Order Total</div>
               <div className='flex-1 text-end text-lg text-gray-800 font-[400] lg:py-[2px]'>total</div>
            </div>


             {/* Checkout  */}
          <button className='w-[100%] bg-indigo-600 text-white lg:mt-5 items-center justify-center rounded-md border border-transparent hover:bg-indigo-700
                  focus:outline-none focus:ring-2  focus:ring-indigo-500 focus:ring-offset-2 lg:p-4'
                  onClick={handleNext}
                  >Checkout</button>
          </div>

          </form>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
          <Space
            direction="vertical"
            size="middle"
            style={{
              display: "flex",
            }}
          >
            <Card title="Shipping" size="small">
             <Space direction="vertical">
             <Space>
                <div className="font-bold">Name:</div>
                <div>{shipping.shippingAddress.fullName}</div>
              </Space>
              <Space>
                <div className="font-bold">Address:</div>
                <div>{shipping.shippingAddress.address}</div>
              </Space>
              <a href="/payment">Edit</a>
             </Space>
            </Card>

            <Card title="Payment" size="small">
             <Space direction="vertical">
             <Space >
                <div className="font-bold">Method:</div>
                <div>{payment}</div>
              </Space>
              <a href="/checkout/payment">Edit</a>
             </Space>
            </Card>

            <Card title="Items" size="small">
                  <Space direction="vertical">
                 {data.map(item => (
                    <Space>
                      <img className="m-sm:w-[50%] m-sm:h-[50%]" src='https://secure-images.nike.com/is/image/DotCom/DX1627_100?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg' alt="" />              
                     <div className="lg:ml-8 lg:mr-20">{item.name}</div>
                     <div className="lg:mr-20">{item.quantity}</div>
                       <div className="lg:ml-8 lg:mr-8">{item.price*item.quantity}</div>
                    </Space>
                 ))}
                  </Space>
            </Card>
            <Button variant="default" onClick={handleBack}>Back</Button>
          </Space>
          
        </div>
      </div>
      



    </div>
  );
}

export default PlaceOrder;
