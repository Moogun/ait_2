// pages/JoinedChatRoom.js
import React from 'react';
import { useParams } from 'react-router-dom';

const JoinedChatRoom = () => {
    const { roomId } = useParams();

    return (
        <div>
            <h1>Chat Room</h1>
            <p>Welcome to Room ID: {roomId}</p>
        </div>
    );
};

export default JoinedChatRoom;
