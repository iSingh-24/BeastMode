const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.send('get route in user');
    } catch (err) {
        console.log(err);
    }
});

router.post('/', (req, res) => {
    try {
        res.send('post route in user');
    } catch (err) {
        console.log(err);
    }
});

router.put('/', (req, res) => {
    try {
        res.send('put route in user');
    } catch (err) {
        console.log(err);
    }
});

router.delete('/', (req, res) => {
    try {
        res.send('delete route in user');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
