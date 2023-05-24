import React, { createContext, useReducer, useEffect, useState } from 'react';
import { checkIfAuthenticated } from '../Components/utils/loginUtils';
import { userReducer } from './reducers';
import { getUsers } from '../Components/utils/userUtils';
import { Actions } from './actions';
import axios from 'axios';

export const GlobalStore = createContext();

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, { users: [] });
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data: fetchedUsers } = await getUsers();

            dispatch({
                type: Actions.GET_USERS,
                payload: { users: fetchedUsers },
            });
            const { data: isAuthenticated } = await checkIfAuthenticated();
            setAuth(isAuthenticated);
        };

        fetchUsers();
    }, []);

    return (
        <GlobalStore.Provider value={{ state, dispatch, auth, setAuth }}>
            {children}
        </GlobalStore.Provider>
    );
};
