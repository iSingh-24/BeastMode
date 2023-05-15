const User = require('../db/models/User');
const Workout = require('../db/models/Workout');

//user utils

const createUser = async (payload) => {
    try {
        const createdUser = await User.create(payload);
        return createdUser;
    } catch (err) {
        //when you throw an error here the error will propagate until it reaches the top level of the application
        //which in this cause would be the api route handling this function
        // throw new Error('failed to create user' + err.message);
        console.log(err);
    }
};

const getUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (err) {
        console.log(err);
    }
};

const getSingleUser = async (userId) => {
    try {
        const singleUser = await User.findByPk(userId);
        return singleUser;
    } catch (err) {
        console.log(err);
    }
};

const updateUser = async (payload) => {
    try {
        const { id } = payload;
        const userToUpdate = await User.update(payload, { where: { id } });
        return userToUpdate;
    } catch (err) {
        console.log(err);
    }
};

const deleteUser = async (userId) => {
    try {
        const userToDelete = await User.findOne({ where: { id: userId } });
        const isDeleted = await userToDelete.destroy();
        return isDeleted
            ? 'user was deleted successfully'
            : 'user was not successfully deleted';
    } catch (err) {
        console.log(err);
    }
};

//workout utils

const createWorkout = async (payload) => {
    try {
        const createdWorkout = await Workout.create(payload);
        return createdWorkout;
    } catch (err) {
        console.log(err);
    }
};

const getWorkouts = async () => {
    try {
        const workouts = await Workout.findAll();

        return workouts;
    } catch (err) {
        console.log(err);
    }
};

const getSingleWorkout = async (workoutId) => {
    try {
        const singleWorkout = await Workout.findByPk(workoutId);
        return singleWorkout;
    } catch (err) {
        console.log(err);
    }
};

const updateWorkout = async (payload) => {
    try {
        const { id } = payload;

        const workoutToUpdate = await Workout.update(payload, {
            where: { id },
        });

        return workoutToUpdate;
    } catch (err) {
        console.log(err);
    }
};

const deleteWorkout = async (workoutId) => {
    try {
        const deletedWorkout = await Workout.destroy({
            where: { id: workoutId },
        });

        return deletedWorkout
            ? 'workout was deleted successfully'
            : 'workout does not exist';
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    updateWorkout,
    deleteWorkout,
};
