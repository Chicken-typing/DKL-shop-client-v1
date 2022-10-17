import React from 'react';
import { List, Avatar, Divider } from 'antd'
import { DeleteTwoTone, EditOutlined } from '@ant-design/icons';
import Button from '../Button';
const ListItem = (props) => {
    const { item } = props
    return (
        <List.Item
            actions={[
                <Button key="list-loadmore-edit" type="link" title="Edit"><EditOutlined /></Button>,
                <Divider type='vertical' />,
                <Button type='link' key="list-loadmore-delete" title="Delete"><DeleteTwoTone twoToneColor="#fa1212" /></Button>
            ]}
            style={{
                backgroundColor: "#f1f1f1",
                padding: 10
            }}
        >
            <List.Item.Meta
                avatar={<Avatar src={item.prodImage} shape="square" size={128} style={{ marginLeft: 10 }} />}
                title={<span style={{ fontSize: 18, fontWeight: "bold" }}>{item.prodName}</span>}
                description={item.description}
            />
            <div>{item.price} VND</div>
        </List.Item>
    );
}

export default ListItem;
