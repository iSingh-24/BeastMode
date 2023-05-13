import React, { useState, useEffect } from 'react';
import User from './User';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../utils/userUtils';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data: users } = await getUsers();
            setUsers(users);
        };

        fetchUsers();
    }, []);

    const deleteUserHandler = async (userId) => {
        await deleteUser(userId);
        const filteredUsers = users.filter((user) => user.id !== userId);
        setUsers(filteredUsers);
    };

    const usersList = users.map((user) => (
        <li key={user.id}>
            <Link to={`/users/${user.id}`}>
                <User user={user} />
            </Link>
            <button type='button' onClick={() => deleteUserHandler(user.id)}>
                x
            </button>
        </li>
    ));

    return (
        <div>
            <h1>All Users</h1>
            <ul>{usersList ? usersList : null}</ul>
        </div>
    );
};

export default UserList;
