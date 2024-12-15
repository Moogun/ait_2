import React from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ChatList = () => {
    const mockChats = [
        { id: 1, name: 'Chat 1' },
        { id: 2, name: 'Chat 2' },
    ];

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                Chat List
            </Typography>
            <List>
                {mockChats.map((chat) => (
                    <ListItem
                        key={chat.id}
                        component={Link}
                        to={`/chats/${chat.id}`}
                        sx={{ textDecoration: 'none' }}
                    >
                        <ListItemText primary={chat.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ChatList;
