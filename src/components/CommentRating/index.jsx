import React, { useState } from "react";
import { Button, Form, Input, Rate, notification} from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function CommentRating() {
  const { TextArea } = Input;
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log("Success:", values);

  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const token = useSelector(state => state.User.userInfor)

  const openNotification = () => {

    const btn = (
      <Button type="primary" size="small" onClick={() => {
        navigate('/login')
        notification.close()
      }}>
        Click here!
      </Button>
    );
    notification.open({
      message: 'Notification Title',
      description:
        'Please Sign In to comment',
      btn,
      duration: 2,
    });
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
       <div className="font-bold tex-2xl mb-4">Comment and Rating Product</div>

       <Form.Item name="rating">
        <Rate />
      </Form.Item>

      <Form.Item name="comment">
        <TextArea  autoSize={{
          minRows: 2,
          maxRows: 6,
        }}/>
      </Form.Item>

    <Form.Item
      >
      <Button type="primary" htmlType="submit" onClick={!token.token ? openNotification : '' }>
          Send your comment
        </Button>
    </Form.Item>
    </Form>
  );
}

export default CommentRating;
