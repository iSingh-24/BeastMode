const router = require('express').Router();
const userRouter = require('./user');
const workoutRouter = require('./workout');
const authRouter = require('./auth');

router.use('/user', userRouter);
router.use('/workout', workoutRouter);
router.use('/auth', authRouter);

module.exports = router;
