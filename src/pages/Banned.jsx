import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banned = () => {
    const naviagate=useNavigate()
    return (
        <Result
            status="error"
            title="Your account is blocked or  not exist."
            extra={
                <Button type="primary" key="console" onClick={()=>naviagate('/')}>
                    Go to store
                </Button>
            }
        />
    );
}

export default Banned;
