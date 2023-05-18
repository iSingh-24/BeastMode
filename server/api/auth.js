//this file will handle user authorization and login related things
const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../db/models/User');
const { createTokens, validateToken } = require('./middleware');

//i am doing posting new users in my user route, maybe i should move that part over to here?

// router.post('/register', async (req, res) => {
//     try {
//     } catch (err) {
//         console.log(err);
//     }
// });

router.get('/profile', validateToken, (req, res) => {
    try {
        res.send('profile route is hit');
    } catch (err) {
        console.log(err);
    }
});

router.get('/authenticated', (req, res) => {
    try {
        const token = req.cookies['access-token'];

        token ? res.send(true) : res.send(false);
    } catch (err) {
        console.log(err);
    }
});

router.post('/logout', (req, res) => {
    try {
        res.clearCookie('access-token', { httpOnly: true });
        res.send('logout component was hit');
    } catch (err) {
        console.log(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const foundUser = await User.findOne({ where: { username } });
        // console.log(foundUser, 'here is found user');
        if (!foundUser) res.status(404).send('User doesnt exist');

        const dbPassword = foundUser.password;
        const match = await bcrypt.compare(password, dbPassword);

        const accessToken = createTokens(foundUser);
        res.cookie('access-token', accessToken, {
            maxAge: 2592000000,
            httpOnly: true,
        });

        match
            ? res.send(foundUser)
            : res.status(400).send('User exists but incorrect password');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
