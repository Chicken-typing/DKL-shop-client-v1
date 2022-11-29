import { Typography } from 'antd';
import React from 'react';

const MessagePiece = ({
    userRole,
    message,
    key
}) => {
    const reciveStyle = {
        backgroundColor: "#e4e6eb",
        borderRadius: 20,
        width: " -moz-fit-content",
        color: "black",
        maxWidth: "50%",
        padding: "5px 10px",

    }
    const sendStyle = {
        backgroundColor: "#1976d2",
        borderRadius: 20,
        color: "white",
        maxWidth: "50%",
        width: " -moz-fit-content",
        padding: "5px 10px",


    }
    const accountID = 'admin'
    const alignStyle = userRole === accountID ? { justifyContent: "flex-end" } : { justifyContent: "flex-start" }
    return (
        <div
            key={key}
            style={{
            ...alignStyle,
            width: "100%",
            display: 'flex',
            margin: "5x 0px",

        }}>
            <Typography.Paragraph style={userRole === accountID ? sendStyle : reciveStyle}>
                {message}
            </Typography.Paragraph>
        </div>
    );
}

export default MessagePiece;
