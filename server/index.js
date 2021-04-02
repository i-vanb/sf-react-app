const jwt = require('jsonwebtoken');
const express = require('express');
const {authMiddleware} = require("./authMiddleware.js");

const cors = require('cors');


const mongoose = require('mongoose');

const {usersRouter} = require('./user-router');

const app = express();

mongoose.connect('mongodb://localhost/sf_driver', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('Connected to sf_driver'))
    .catch((error) => console.error(error));

app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);

app.get('/', authMiddleware, (req, res) => {
    //
    // try {
    //     const result = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
    //     res.send(result)
    // } catch(e) {
    //     res.status(401).send(e);
    // }
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000...');
})
