import React from 'react';

const User = ({ user }) => {
    return <div>{user ? `${user.firstName} ${user.lastName}` : null}</div>;
};

export default User;
