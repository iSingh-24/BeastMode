import React from 'react';
import { updateUser } from '../../utils';

const UpdateUser = (payload) => {
    return (
        <div>
            <button type='button' onClick={() => updateUser(payload)}>
                Update User
            </button>
        </div>
    );
};

export default UpdateUser;
