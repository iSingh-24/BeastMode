const router = require('express').Router();
const userRouter = require('./user');
const workoutRouter = require('./workout');

router.use('/user', userRouter);
router.use('/workout', workoutRouter);

module.exports = router;
