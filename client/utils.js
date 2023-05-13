import axios from 'axios';

export const getUsers = async () => {
    try {
        const users = await axios.get('http://localhost:3000/api/user');
        return users;
    } catch (err) {
        console.log(err);
    }
};

export const getSingleUser = async (userId) => {
    try {
        const singleUser = await axios.get(
            `http://localhost:3000/api/user/${userId}`
        );
        return singleUser;
    } catch (err) {
        console.log(err);
    }
};
export const postUser = async (payload) => {
    try {
        const addedUser = await axios.post(
            'http://localhost:3000/api/user',
            payload
        );

        return addedUser;
    } catch (err) {
        console.log(err);
    }
};

export const updateUser = async (payload) => {
    try {
        const updatedUser = await axios.put(
            'http://localhost:3000/api/user/:id',
            payload
        );

        return updatedUser;
    } catch (err) {
        console.log(err);
    }
};

export const getWorkouts = async () => {
    try {
        const workouts = await axios.get('http://localhost:3000/api/workouts');

        return workouts;
    } catch (err) {
        console.log(err);
    }
};

export const getSingleWorkout = async (workoutId) => {
    try {
        const singleWorkout = await axios.get(
            'http://localhost:3000/api/workout/:id',
            workoutId
        );

        return singleWorkout;
    } catch (err) {
        console.log(err);
    }
};

export const postWorkout = async (payload) => {
    try {
        const addedWorkout = await axios.post(
            'http://localhost:3000/api/workout',
            { payload }
        );
    } catch (err) {
        console.log(err);
    }
};

export const updateWorkout = async (payload) => {
    try {
        const updatedWorkout = await axios.post(
            'http://localhost:3000/api/workout/:id',
            { payload }
        );

        return updatedWorkout;
    } catch (err) {
        console.log(err);
    }
};
