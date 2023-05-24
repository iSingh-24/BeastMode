import React, { createContext, useReducer, useEffect } from 'react';
import { userReducer } from './reducers';
import { getUsers } from '../Components/utils/userUtils';
import { Actions } from './actions';
import axios from 'axios';

export const GlobalStore = createContext();

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, { users: [] });

    useEffect(() => {
        const fetchUsers = async () => {
            const { data: fetchedUsers } = await getUsers();

            dispatch({
                type: Actions.GET_USERS,
                payload: { users: fetchedUsers },
            });
            console.log(state, ' here is state ');
        };

        fetchUsers();
    }, []);

    return (
        <GlobalStore.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStore.Provider>
    );
};
