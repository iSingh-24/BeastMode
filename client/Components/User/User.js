import React, { useState, useEffect } from 'react';
import CreateUser from './CreateUser';
import { getUsers } from '../../utils';

const User = () => {
    const [users, setUsers] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const { data: users } = await getUsers();
            setUsers(users);
        };

        fetchUsers();
    }, []);

    const usersList = users
        ? users.map((user) => (
              <li key={user.id}>{`${user.firstName} ${user.lastName}`}</li>
          ))
        : null;

    return (
        <div>
            <CreateUser />
            <h3>Users List</h3>
            <ul>{usersList}</ul>
        </div>
    );
};

export default User;
