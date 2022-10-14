import React from 'react';
import { List, Button, Avatar, Divider } from 'antd'
import { DeleteTwoTone } from '@ant-design/icons';
const ListItem = (props) => {
    const { item } = props
    return (
        <List.Item
            actions={[
                <Button key="list-loadmore-edit" type="link">edit</Button>,
                <Divider type='vertical' />,
                <Button type='link' key="list-loadmore-delete"><DeleteTwoTone twoToneColor="#fa1212" /></Button>
            ]}
        >
                <List.Item.Meta
                    avatar={<Avatar src={item.prodImage} shape="square" size={128} />}
                    title={<a href="https://ant.design">{item.prodName}</a>}
                    description={item.description}
                />
            <div>{ item.price} VND</div>
        </List.Item>
    );
}

export default ListItem;
