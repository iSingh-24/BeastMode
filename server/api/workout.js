const router = require('express').Router();
const Workout = require('../db/relationships');

router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.findAll();

        res.send(workouts);
    } catch (err) {
        console.log(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const singleWorkout = await Workout.findOne({ where: { id } });
        singleWorkout
            ? res.send(singleWorkout)
            : res.status(404).send('Workout was not in database');
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try {
        res.send('post route in workout');
    } catch (err) {
        console.log(err);
    }
});

router.put('/', async (req, res) => {
    try {
        res.send('put route in workout');
    } catch (err) {
        console.log(err);
    }
});

router.delete('/', async (req, res) => {
    try {
        res.send('delete route in workout');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
