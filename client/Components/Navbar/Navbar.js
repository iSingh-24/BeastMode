import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { checkIfAuthenticated } from '../utils/loginUtils';
import axios from 'axios';

const Navbar = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const isValid = await checkIfAuthenticated();

            setAuthenticated(isValid.data);
        };

        checkAuth();
    }, [authenticated]);

    const logoutHandler = async () => {
        const value = await axios.post('http://localhost:3000/api/auth/logout');
        setAuthenticated(false);
    };

    const logout = authenticated ? (
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
            {!authenticated ? (
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
