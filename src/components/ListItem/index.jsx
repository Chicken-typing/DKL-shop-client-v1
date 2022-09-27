import React from 'react';
import { List, Skeleton, Avatar, Divider } from 'antd'
import { DeleteTwoTone } from '@ant-design/icons';
const ListItem = (props) => {
    const { item } = props
    return (
        <List.Item
            actions={[
                <a key="list-loadmore-edit">edit</a>,
                <Divider type='vertical' />,
                <a key="list-loadmore-delete"><DeleteTwoTone twoToneColor="#fa1212" /></a>
            ]}
        >
            <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                    avatar={<Avatar src={item.picture.large} shape="square" size={128} />}
                    title={<a href="https://ant.design">{item.name?.last}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>Price</div>
            </Skeleton>
        </List.Item>
    );
}

export default ListItem;
