const User = require('../db/models/User');
const Workout = require('../db/models/Workout');

//user utils

const createUser = async (payload) => {
    try {
        const createdUser = await User.create(payload);
        return createdUser;
    } catch (err) {
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
        return singleUser ? singleUser : null;
    } catch (err) {
        console.log(err);
    }
};

const updateUser = async (payload) => {
    try {
        const { id } = payload;
        const userToUpdate = await User.update(payload, { where: { id } });

        // if (userToUpdate) {
        //     await userToUpdate.save();
        //     return userToUpdate;
        // } else {
        //     return null;
        // }
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
        return singleWorkout ? singleWorkout : null;
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

        if (workoutToUpdate) {
            await workoutToUpdate.save();
            return workoutToUpdate;
        } else {
            return null;
        }
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
