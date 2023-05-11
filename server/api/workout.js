const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.send('get route in workout');
    } catch (err) {
        console.log(err);
    }
});

router.post('/', (req, res) => {
    try {
        res.send('post route in workout');
    } catch (err) {
        console.log(err);
    }
});

router.put('/', (req, res) => {
    try {
        res.send('put route in workout');
    } catch (err) {
        console.log(err);
    }
});

router.delete('/', (req, res) => {
    try {
        res.send('delete route in workout');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
