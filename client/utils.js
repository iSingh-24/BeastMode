import axios from 'axios';

const getUsers = async () => {
    try {
        const users = await axios.get('http://localhost:3000/api/users');
        return users;
    } catch (err) {
        console.log(err);
    }
};

const getSingleUser = async (userId) => {
    try {
        const singleUser = await axios.get(
            'http://localhost:3000/api/user/:id',
            userId
        );
        return singleUser;
    } catch (err) {
        console.log(err);
    }
};
const postUser = async (payload) => {
    try {
        const addedUser = await axios.post(
            'http://localhost:3000/api/users',
            payload
        );

        return addedUser;
    } catch (err) {
        console.log(err);
    }
};
const updateUser = async (payload) => {
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

const getWorkouts = async () => {
    try {
        const workouts = await axios.get('http://localhost:3000/api/workouts');

        return workouts;
    } catch (err) {
        console.log(err);
    }
};

const getSingleWorkout = async (workoutId) => {
    try {
        const singleWorkout = await axios.get(
            'http://localhost:3000/api/workouts/:id',
            workoutId
        );

        return singleWorkout;
    } catch (err) {
        console.log(err);
    }
};

const postWorkout = async (payload) => {
    try {
        const addedWorkout = await axios.post(
            'http://localhost:3000/api/workouts',
            { payload }
        );
    } catch (err) {
        console.log(err);
    }
};

const updateWorkout = async (payload) => {
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

export default {
    getUsers,
    getSingleUser,
    postUser,
    updateUser,
    getWorkouts,
    getSingleWorkout,
    postWorkout,
    updateWorkout,
};
