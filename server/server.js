const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const router = require('./api');
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
