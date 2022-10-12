import React from 'react';
import { Space, Input} from 'antd';
import{HeartOutlined,DollarCircleOutlined} from '@ant-design/icons';
import InputImage from '../../components/InputImage';
import SelectTag from '../../components/SelectTag';
const { TextArea } = Input
const tags = [
    {
        label: "Man",
        value:'man'
    },
    {
        label: "Woman",
        value:'woman'
    },
    {
        label: "Kid",
        value:'kid'
    },
    {
        label: "Sport",
        value:'sport'
    },
    {
        label: "Sneaker",
        value:'sneaker'
    }
]
const AddProductTab = () => {
    return (
        <Space 
            direction='vertical'
            
        >
            <Input placeholder='Name of product' prefix={<HeartOutlined />} />
            <Input placeholder='5.000.000' prefix={<DollarCircleOutlined />} suffix="VND" type='number' />
            <SelectTag listTags={tags} />
            <TextArea rows={5} />
            <InputImage />
        </Space>
    );
}

export default AddProductTab;
