import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100',
            }}
        >
            <Link to='/'>Home </Link>
            <Link to='/users'>Users </Link>
            <Link to='/workouts'>Workouts </Link>
            <Link to='/users/create'>Create User</Link>
        </div>
    );
};

export default Navbar;
