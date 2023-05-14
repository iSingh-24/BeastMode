import React, { useState } from 'react';
import { postUser } from '../utils/userUtils';

const CreateUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstName = ({ value }) => {
        setFirstName(value);
    };

    const handleLastName = ({ value }) => {
        setLastName(value);
    };

    const handleUsername = ({ value }) => {
        setUsername(value);
    };

    const handlePassword = ({ value }) => {
        setPassword(value);
    };

    const handleUserSubmit = async (event) => {
        event.preventDefault();
        const { data: postedUser } = await postUser({ firstName, lastName });
        setFirstName('');
        setLastName('');
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            <form action='submit' onSubmit={handleUserSubmit}>
                <label htmlFor='firstName'>First Name </label>
                <input
                    type='text'
                    value={firstName}
                    onChange={({ target }) => handleFirstName(target)}
                    required
                />
                <br />
                <br />

                <label htmlFor='lastName'>Last Name </label>
                <input
                    type='text'
                    value={lastName}
                    onChange={({ target }) => handleLastName(target)}
                    required
                />
                <br />
                <br />

                <label htmlFor='username'>Username </label>
                <input
                    type='text'
                    value={username}
                    onChange={({ target }) => handleUsername(target)}
                    required
                />
                <br />
                <br />

                <label htmlFor='password'>Password </label>
                <input
                    type='password'
                    value={password}
                    onChange={({ target }) => handlePassword(target)}
                    required
                />
                <br />
                <br />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default CreateUser;
