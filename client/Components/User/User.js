import React, { useState, useEffect } from 'react';
import CreateUser from './CreateUser';
import { getUsers } from '../../utils';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../utils';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data: users } = await getUsers();
            setUsers(users);
        };

        fetchUsers();
    }, []);

    const updateUsersArray = (user) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    };

    const deleteUserHandler = async (userId) => {
        await deleteUser(userId);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    };

    const usersList = users.map((user) => (
        <li key={user.id}>
            <Link
                to={`/users/${user.id}`}
            >{`${user.firstName} ${user.lastName}`}</Link>
            <button type='button' onClick={() => deleteUserHandler(user.id)}>
                x
            </button>
        </li>
    ));

    return (
        <div>
            <CreateUser addUser={updateUsersArray} />
            <h3>Users List</h3>
            <ul>{usersList}</ul>
        </div>
    );
};

export default User;
