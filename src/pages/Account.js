// pages/Account.js
import React from 'react';
import { useSelector } from 'react-redux';

const Account = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div>
            <h1>Account</h1>
            <p>Welcome, {user?.name}</p>
        </div>
    );
};

export default Account;
