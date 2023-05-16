import React from 'react';
import axios from 'axios';

const Home = () => {
    const logoutHandler = async () => {
        const value = await axios.post('http://localhost:3000/api/auth/logout');
        console.log(value, 'here is value');
    };

    return (
        <div>
            Gym Application Home Page
            <button type='button' onClick={logoutHandler}>
                Logout
            </button>
        </div>
    );
};

export default Home;
