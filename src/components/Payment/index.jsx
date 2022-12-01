import React, {useState, useEffect} from 'react'
import {Radio, Space, Button } from 'antd'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const shippingAddress = useSelector(state => state.ShippingInfo.shippingAddress)
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const navigate = useNavigate()
useEffect(() => {
  if (!shippingAddress.address) {
    navigate('/checkout/shippingAddress');
  }
})
  return (
    <div className='lg:mt-8 lg:px-8 lg:mb-20'>
      <div className='text-3xl font-bold mb-5'>Payment Method</div>
      <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical" size='middle'>
        <Radio value={1}><div className='font-medium ml-1'>PayPal</div></Radio>
        <Radio value={2}><div className='font-medium ml-1'>Stripe</div></Radio>
        <Button type="primary" htmlType='submit'>Continue</Button>
      </Space>
    </Radio.Group>
    
    </div>
  )
}

export default Payment