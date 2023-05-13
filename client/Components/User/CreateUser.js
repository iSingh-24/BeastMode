import React, { useState } from 'react';
import { postUser } from '../../utils';

const CreateUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstName = ({ value }) => {
        setFirstName(value);
    };

    const handleLastName = ({ value }) => {
        setLastName(value);
    };

    const handleUserSubmit = async (event) => {
        event.preventDefault();
        const { data: postedUser } = await postUser({ firstName, lastName });
    };

    return (
        <div>
            <form action='submit' onSubmit={handleUserSubmit}>
                <label htmlFor='firstName'>First Name </label>
                <input
                    type='text'
                    onChange={({ target }) => handleFirstName(target)}
                    required
                />
                <br />
                <br />
                <label htmlFor='lastName'>Last Name </label>
                <input
                    type='text'
                    onChange={({ target }) => handleLastName(target)}
                    required
                />
                <br />
                <br />
                <button type='submit'>Sign Up</button>
            </form>
            {/* <button>UpdateUser</button> */}
        </div>
    );
};

export default CreateUser;
