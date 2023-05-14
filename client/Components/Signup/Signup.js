import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = ({ value }) => {
        setEmail(value);
    };

    const onPasswordChange = ({ value }) => {
        setPassword(value);
    };

    return (
        <div>
            <h1>Create Account</h1>
            <div>
                <label htmlFor=''>Email </label>
                <input
                    type='email'
                    value={email}
                    onChange={({ target }) => onEmailChange(target)}
                    required
                />
                <br />
                <br />
                <label htmlFor='password' value={password}>
                    Password{' '}
                </label>
                <input
                    type='password'
                    onChange={({ target }) => onPasswordChange(target)}
                    required
                />
            </div>
        </div>
    );
};

export default Signup;
