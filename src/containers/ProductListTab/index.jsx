import React, { useEffect } from 'react';
import './style.scss'
import { List,Divider } from 'antd'
import ListItem from '../../components/ListItem'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../action';
const ProductListTab = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    const res =useSelector(state => state.fetchProduct.products)
    return (
        <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={res}
            renderItem={(item) => (
                <>
                    <ListItem item={item}/>
                    <Divider />
                </>
            )}
        />
    );
}

export default ProductListTab;
