// pages/ChatDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ChatDetails = () => {
    const { chatId } = useParams();

    return (
        <div>
            <h1>Chat Details</h1>
            <p>Chat ID: {chatId}</p>
            <Link to={`/room/${chatId}`}>Join Chat Room</Link>
        </div>
    );
};

export default ChatDetails;
