// components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions';

const Navbar = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f8f9fa' }}>
            <div>
                <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                {isAuthenticated && <Link to="/chats" style={{ marginRight: '10px' }}>Chats</Link>}
            </div>
            <div>
                {isAuthenticated ? (
                    <>
                        <span style={{ marginRight: '10px' }}>Logged in as {user?.name}</span>
                        <Link to="/account" style={{ marginRight: '10px' }}>Account</Link>
                        <button onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
