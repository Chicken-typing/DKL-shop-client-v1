import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../action/Shipping';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio } from 'antd';


function Shipping() {

  // Use hooks to declare information
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const shipping = useSelector(state => state.ShippingInfo.shippingAddress)
const [fullName, setFullName] = useState(shipping.fullName || '');
const [address, setAddress] = useState(shipping.address || '');
const [city, setCity] = useState(shipping.city || '');
const [postalCode, setPostalCode] = useState(
  shipping.postalCode || ''
);
const [country, setCountry] = useState(shipping.country || '');
  
  const submitHandler = () => {
    dispatch(saveShippingAddress({fullName,address, city, postalCode, country }))
    navigate('/checkout/payment')
  }
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
  console.log(fullName);
  
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
      <Form.Item label="Full Name"  name={['user', 'name']} required tooltip="Please input your Full Name" rules={[
              {
                required: true,
              },
            ]}>
        <Input placeholder="Your FullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </Form.Item>

      <Form.Item label="Address" name={[ 'address']} required tooltip="Input your correct address" rules={[
              {
                required: true,
              },
            ]} >
        <Input placeholder="Your Address" value={address} onChange={(e) => setAddress(e.target.value)}  />
      </Form.Item>

      <Form.Item label="City" required tooltip="Input your City" name={['user', 'city']} rules={[
              {
                required: true,
              },
            ]}>
        <Input placeholder="Your City"value={city} onChange={(e) => setCity(e.target.value)} />
      </Form.Item>

      <Form.Item label="Postal Code " required tooltip="Input correct Postal Code" name={['user', 'postal code']} rules={[
              {
                required: true,
              },
            ]}>
        <Input placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
      </Form.Item>

      <Form.Item label="Country " required tooltip="Input your country " name={['user', 'country']} rules={[
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
        <Button type="primary" htmlType="submit" onClick={() =>submitHandler }>Submit</Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}

export default Shipping