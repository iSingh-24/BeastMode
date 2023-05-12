const router = require('express').Router();
const User = require('../db/models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();

        console.log(users, 'here are users');

        res.send(users);
    } catch (err) {
        console.log(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const singleUser = await User.findOne({ where: { id } });
        singleUser
            ? res.send(singleUser)
            : res.status(404).send('User was not in database');
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try {
        res.send('post route in user');
    } catch (err) {
        console.log(err);
    }
});

router.put('/', async (req, res) => {
    try {
        res.send('put route in user');
    } catch (err) {
        console.log(err);
    }
});

router.delete('/', async (req, res) => {
    try {
        res.send('delete route in user');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
