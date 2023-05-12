const router = require('express').Router();
const User = require('../db/models/User');

const {
    getUsers,
    deleteUser,
    updateUser,
    getSingleUser,
    createUser,
} = require('./utils');

router.get('/', async (req, res) => {
    try {
        const users = await getUsers();
        res.send(users);
    } catch (err) {
        console.log(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const singleUser = await getSingleUser(id);

        singleUser
            ? res.send(singleUser)
            : res.status(404).send('User was not in database');
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const createdUser = await createUser(req.body);

        createdUser
            ? res.send(createdUser)
            : res.status(404).send('user was not created successfully');
    } catch (err) {
        console.log(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await updateUser(req.body);
        updatedUser
            ? res.send(updatedUser)
            : res.status(404).send('user was not updated');
    } catch (err) {
        console.log(err);
    }
});

router.delete('/', async (req, res) => {
    try {
        const { id } = req.body;
        const wasDeleted = await deleteUser(id);
        wasDeleted
            ? res.send(wasDeleted)
            : res.status(404).send('user was not successfully deleted');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
