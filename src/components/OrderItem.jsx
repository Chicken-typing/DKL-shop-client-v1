import { Modal, List, Avatar, Card, Typography, Layout } from 'antd';
import Button from './Button'
import React, { useState } from 'react';
const { Item } = List
const OrderItem = props => {
    const { item } = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Item
                onClick={showModal}
                key={item.orderID}
                style={{
                    margin: 10
                }}
            >
                <Card title={item.orderID} hoverable>
                    <Item.Meta
                        title={<Typography.Paragraph ellipsis={true}>{item.userName}</Typography.Paragraph>}
                        avatar={<Avatar size='large' src={item.userImage} />}
                        description={<Typography.Text keyboard>{item.totalPrice} VND</Typography.Text>} />

                </Card>
            </Item>
            <Modal
                title={"Order:" + item.orderID}
                centered
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>Customer name: {item.userName}</div>
                    <div>Address: {item.address}</div>
                </div>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    overflow: 'auto',
                    height: 250,
                    marginTop: 35
                }}>
                    {
                        item.products.map(product => (
                            <Card
                                hoverable
                                style={{
                                    width: 140,
                                    height: 200,
                                    margin: "0px 5px"
                                }}
                                cover={<img alt="example" src="data:image/jpeg;base64,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" />}
                            >
                                <Card.Meta title={product} />
                            </Card>
                        ))
                    }
                </div>
                <div>Price: {<Typography.Text type='danger'>{item.totalPrice} VND</Typography.Text>}</div>
            </Modal>
        </>
    );
}

export default OrderItem;
