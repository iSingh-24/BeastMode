import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalStore } from '../../context/store';
import axios from 'axios';

const Navbar = () => {
    const { auth, setAuth } = useContext(GlobalStore);

    const logoutHandler = async () => {
        const value = await axios.post('http://localhost:3000/api/auth/logout');
        setAuth(false);
    };

    const logout = auth ? (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100',
            }}
        >
            <Link to='/'>Home </Link>
            <Link to='/' onClick={logoutHandler}>
                Logout
            </Link>
        </div>
    ) : null;

    return (
        <div>
            {!auth ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100',
                    }}
                >
                    <Link to='/'>Home </Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/user/create'>Sign Up</Link>
                </div>
            ) : (
                logout
            )}
        </div>
    );
};

export default Navbar;
