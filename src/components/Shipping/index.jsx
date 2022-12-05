import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../action/Shipping';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio } from 'antd';
import {  Group } from '@mantine/core';
import { useBetween } from 'use-between';

function Shipping({onClick}) {

  // Use hooks to declare information
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const shipping = useSelector(state => state.ShippingInfo)

const [fullName, setFullName] = useState(shipping.shippingAddress.fullName || "");
const [address, setAddress] = useState(shipping.shippingAddress.address || '');
const [city, setCity] = useState(shipping.shippingAddress.city || '');
const [postalCode, setPostalCode] = useState(
  shipping.shippingAddress.postalCode || ''
);
const [country, setCountry] = useState(shipping.shippingAddress.country || '');

  
  
  const [form] = Form.useForm();



  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };


    
  // Check User has login or not
  // useEffect(() => {
  //   if (!userInfo) {
  //     navigate('/signin?redirect=/shipping');
  //   }
  // }, [userInfo, navigate]);


  const submitHandler = (e) => {
    dispatch(saveShippingAddress({fullName,address, city, postalCode, country }))
    

  }
  const handleBack = () => {
    navigate('/cart')
  }

  const handleNext = () => {
   if(fullName === "" || address === "" || city === "" || postalCode === "" || country === "")
   {
    window.alert("Full fill information")
   }
   else
   {
    submitHandler()
    onClick()
    dispatch(saveShippingAddress({fullName,address, city, postalCode, country }))
    navigate('/checkout/payment')
   }
  }

  return (
    <div>
     

      <div className=" p-4">
        <h1 className="my-3 text-2xl">Shipping Address</h1>
        <Form
      form={form}
      layout="vertical"
      onFinish={() => {
        submitHandler()
        
      }} 

      validateMessages={validateMessages}
      name="nest-messages" 
    >
      <Form.Item  label="Full Name"   required tooltip="Please input your Full Name" rules={[
              {
                required: true,
              },
            ]}>
        <Input placeholder="Your FullName"  value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </Form.Item>

      <Form.Item label="Address" required tooltip="Input your correct address" rules={[
              {
                required: true,
              },
            ]} >
        <Input placeholder="Your Address" value={address} onChange={(e) => setAddress(e.target.value)}  />
      </Form.Item>

      <Form.Item label="City" required tooltip="Input your City" rules={[
              {
                required: true,
              },
            ]}>
        <Input placeholder="Your City"value={city} onChange={(e) => setCity(e.target.value)} />
      </Form.Item>

      <Form.Item label="Postal Code " required tooltip="Input correct Postal Code"  rules={[
              {
                required: true,
              },
            ]}>
        <Input placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
      </Form.Item>

      <Form.Item label="Country " required tooltip="Input your country "  rules={[
              {
                required: true,
              },
            ]}>
        <Input placeholder="Your Country" value={country} onChange={(e) => setCountry(e.target.value)} />
      </Form.Item>

      {/* <Form.Item label="Phone Number " required tooltip="Input your phone number" name={['user', 'phone number']} rules={[
              {
                required: true,
                type: 'number',
              },
            ]}>
        <Input placeholder="Your phone number" />
      </Form.Item> */}



     <Form.Item>
     <Group position="center" mt="xl">
        <Button type='primary' variant="default" onClick={handleBack}>Back</Button>
        <Button type='primary' variant='default' onClick={handleNext} htmlType='submit' >Next step</Button>
      </Group>
     </Form.Item>

      {/* <Form.Item>
        <Button type="primary" htmlType="submit" onClick={() =>submitHandler }>Submit</Button>
      </Form.Item> */}
    </Form>
      </div>
    </div>
  )
}

export default Shipping