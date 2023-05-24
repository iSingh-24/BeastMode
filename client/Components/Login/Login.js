import React, { useState, useContext } from 'react';
import { checkCredentials } from '../utils/loginUtils';
import { GlobalStore } from '../../context/store';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setAuth } = useContext(GlobalStore);

    const onUsernameChange = ({ value }) => {
        setUsername(value);
    };

    const onPasswordChange = ({ value }) => {
        setPassword(value);
    };

    const onLoginSubmit = async (event) => {
        event.preventDefault();

        const foundUser = await checkCredentials({ username, password });
        if (!foundUser) {
            window.alert('invalid user credentials were entered');
        } else {
            setAuth(true);
        }

        setUsername('');
        setPassword('');
    };

    return (
        <div>
            <h1>Login</h1>
            <form action='submit' onSubmit={onLoginSubmit}>
                <label htmlFor='username'>Enter Username </label>
                <input
                    type='text'
                    value={username}
                    onChange={({ target }) => onUsernameChange(target)}
                    required
                />
                <br />
                <br />
                <label htmlFor='password'>Enter Password </label>
                <input
                    type='password'
                    value={password}
                    onChange={({ target }) => onPasswordChange(target)}
                    required
                />
                <br />
                <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
