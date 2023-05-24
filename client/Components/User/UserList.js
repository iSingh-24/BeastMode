import React, { useContext } from 'react';
import User from './User';
import { Link } from 'react-router-dom';
import { deleteUser } from '../utils/userUtils';
import { GlobalStore } from '../../context/store';

const UserList = () => {
    const { state } = useContext(GlobalStore);
    const { users } = state;

    const deleteUserHandler = async (userId) => {
        await deleteUser(userId);
        const filteredUsers = users.filter((user) => user.id !== userId);
        setUsers(filteredUsers);
    };

    const usersList = users
        ? users.map((user) => (
              <li key={user.id}>
                  <Link to={`/users/${user.id}`}>
                      <User user={user} />
                  </Link>
                  <button
                      type='button'
                      onClick={() => deleteUserHandler(user.id)}
                  >
                      x
                  </button>
              </li>
          ))
        : null;

    return (
        <div>
            <h1>All Users</h1>
            <ul>{usersList ? usersList : null}</ul>
        </div>
    );
};

export default UserList;
