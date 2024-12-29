// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ChatList from './pages/ChatList';
import ChatDetails from './pages/ChatDetails';
import JoinedChatRoom from './pages/JoinedChatRoom';

import Navbar from './components/Navbar'; //

import { useSelector } from 'react-redux';

const App = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Router>
            <Navbar /> {/* Render Navbar */}
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/account" /> : <Login />} />
                <Route path="/signup" element={isAuthenticated ? <Navigate to="/account" /> : <Signup />} />

                <Route
                    path="/chats"
                    element={<ChatList /> }
                />

                {/* Protected Routes */}
                <Route
                    path="/account"
                    element={isAuthenticated ? <Account /> : <Navigate to="/login" />}
                />

                <Route
                    path="/chats/:chatId"
                    element={isAuthenticated ? <ChatDetails /> : <Navigate to="/login" />}
                />
                <Route
                    path="/room/:roomId"
                    element={isAuthenticated ? <JoinedChatRoom /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
};

export default App;

