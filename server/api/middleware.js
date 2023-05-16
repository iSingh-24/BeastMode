const { sign, verify } = require('jsonwebtoken');
require('dotenv').config();

const createTokens = (user) => {
    const accessToken = sign(
        { username: user.username, id: user.id },
        process.env.JWT
    );

    return accessToken;
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies['access-token'];

    if (!accessToken) return res.status(400).send('User not authenticated');

    try {
        const validToken = verify(accessToken, process.env.JWT);

        if (validToken) {
            req.authenticated = true;
            return next();
        }
    } catch (err) {
        console.log(err);
        res.status(400).send('Invalid token');
    }
};

module.exports = { createTokens, validateToken };
