import axios from 'axios';

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
            `http://localhost:3000/api/workout/${workoutId}`
        );

        return singleWorkout;
    } catch (err) {
        console.log(err);
    }
};

const postWorkout = async (payload) => {
    try {
        const addedWorkout = await axios.post(
            'http://localhost:3000/api/workout',
            { payload }
        );
    } catch (err) {
        console.log(err);
    }
};

const updateWorkout = async (payload) => {
    try {
        const { id } = payload;
        const updatedWorkout = await axios.post(
            `http://localhost:3000/api/workout/${id}`,
            { payload }
        );

        return updatedWorkout;
    } catch (err) {
        console.log(err);
    }
};

const deleteWorkout = async (workoutId) => {
    try {
        const deletedWorkout = await axios.delete(
            `http://localhost:3000/api/workout/${workoutId}`
        );
        return deletedWorkout;
    } catch (err) {
        console.log(err);
    }
};

export {
    getWorkouts,
    getSingleWorkout,
    postWorkout,
    updateWorkout,
    deleteWorkout,
};
