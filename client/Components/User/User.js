import React, { useState, useEffect } from 'react';
import CreateUser from './CreateUser';
import { getUsers } from '../../utils';
import { Link } from 'react-router-dom';

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

    const usersList = users.map((user) => (
        <li key={user.id}>
            <Link
                to={`/users/${user.id}`}
            >{`${user.firstName} ${user.lastName}`}</Link>
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
