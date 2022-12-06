import React, {useState, useEffect} from 'react'
import {Radio, Space, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  Group } from '@mantine/core';
import { savePaymentMethod } from '../../action/Shipping';


function Payment({onClickBack, onClickNext}) {
  const shipping = useSelector(state => state.ShippingInfo)
  const payment = useSelector(state => state.PaymentMethod.paymentMethod)
  const [value, setValue] = useState(payment || 'Paypal');
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const navigate = useNavigate()
  const dispatch = useDispatch()
  

useEffect(() => {
  if (!shipping.shippingAddress.address) {
    navigate('/checkout/shippingAddress');
  }
},[shipping,navigate])

const handleBack = () => {
  onClickBack()
  navigate('/checkout/ShippingAddress')
}

const handleNext = () => {
 
  onClickNext()
  dispatch(savePaymentMethod(value))
  navigate('/checkout/placeOrder')
}
  return (
    <div className='lg:mt-8 lg:px-8 lg:mb-20'>
      <div className='text-3xl font-bold mb-5'>Payment Method</div>
      <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical" size='middle'>
        <Radio value='Paypal'   checked={value === 'PayPal'} onChange={(e) => setValue(e.target.value)} ><div className='font-medium ml-1 onCh'>PayPal</div></Radio>
        <Radio value='Stripe' checked={value === 'Stripe'} onChange={(e) => setValue(e.target.value)}><div className='font-medium ml-1'>Stripe</div></Radio>
      </Space>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={handleBack}>Back</Button>
        <Button variant='default' onClick={handleNext} type='submit'>Next step</Button>
      </Group>
    </Radio.Group>
    
    </div>
  )
}

export default Payment