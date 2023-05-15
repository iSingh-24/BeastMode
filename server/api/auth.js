//this file will handle user authorization and login related things
const router = require('express').Router();
// const bcrypt = require('bcrypt');
const User = require('../db/models/User');

//i am doing posting new users in my user route, maybe i should move that part over to here?

// router.post('/register', async (req, res) => {
//     try {
//     } catch (err) {
//         console.log(err);
//     }
// });

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const foundUser = await User.findOne({ where: { username, password } });
        foundUser
            ? res.status(200).send(foundUser)
            : res.status(404).send('Incorrect User Credentials');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
