import { Actions } from './actions';

export const userReducer = (state, action) => {
    const userMap = new Map();

    userMap.set(Actions.ADD_USER, {
        ...state,
        users: [...state.users, action.payload.user],
    });

    userMap.set(Actions.GET_USERS, { ...state, users: action.payload.users });

    return userMap.has(action.type) ? userMap.get(action.type) : state;
};
