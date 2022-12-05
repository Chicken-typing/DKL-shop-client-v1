import React from 'react';
import { Select, Input, Form } from 'antd';
import { HeartOutlined, DollarCircleOutlined, FormOutlined } from '@ant-design/icons';
import InputImage from '../../../components/InputImage';
import Button from '../../../components/Button';
import './style.scss'
const { TextArea } = Input
const brands = [{
    label: 'Beijing',
    value: 'Beijing',
},
{
    label: 'Shanghai',
    value: 'Shanghai',
},]
const tags = [{
    label: 'Beijing',
    value: 'Beijing',
},
{
    label: 'Shanghai',
    value: 'Shanghai',
},]
const AddProductTab = () => {
    const [form] = Form.useForm();
    const onFinish = (value) => {
        console.log(value)
    };
    const handleChange = () => {
        form.setFieldsValue({
            sights: [],
        });
    };
    return (
        <div
            className="AddProductTab">
            <Form
                form={form}
                onFinish={onFinish}
                style={{
                    maxWitdth: 650,
                    border: "1px solid #dadada",
                    borderRadius: 10,
                    padding: "15px 15px 20px 15px"
                }}
                className="InputCart">
                <Form.Item name="product-name" rules={[
                    {
                        required: true,
                        message: 'Please input Product\'s name',
                    },
                ]}>
                    <Input placeholder='Name of product' prefix={<HeartOutlined />} />
                </Form.Item>
                <Form.Item name="product-price" rules={[
                    {
                        required: true,
                        message: 'Please input Product\'s price',
                    },
                ]}>
                    <Input placeholder='5.000.000' prefix={<DollarCircleOutlined />} suffix="VND" type='number' />
                </Form.Item>
                <Form.Item name="product-type" rules={[
                    {
                        required: true,
                        message: 'Please input Product\'s type',
                    },
                ]}>
                    <Select options={tags} mode="multiple" onChange={handleChange} placeholder="Type of product" />
                </Form.Item>
                <Form.Item name="product-brand" rules={[
                    {
                        required: true,
                        message: 'Please input Product\'s brand',
                    },
                ]}>
                    <Select options={brands} mode="multiple" onChange={handleChange} placeholder="Brand of product" />
                </Form.Item>
                <Form.Item name="product-description" rules={[
                    {
                        required: true,
                        message: 'Please input Product\'s description',
                    },
                ]}>

                    <TextArea rows={5} placeholder="Description" />
                </Form.Item>
                <div style={{
                    width: 600,
                    border: "1px solid #dadada",
                    padding: "15px 7px 7px 15px",
                    borderRadius: 2,
                    marginBottom: 20
                }}>
                    <InputImage />
                </div>
                <Form.Item >
                    <Button style={{ width: 100 }} htmlType="submit"><FormOutlined />ADD</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddProductTab;
