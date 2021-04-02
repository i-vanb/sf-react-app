const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const {CODE_FOR_RECOVERY_TOKEN_SECRET} = require("./constants");
const {RECOVERY_TOKEN_SECRET} = require("./constants");
const {sendEmail} = require('./sendEmail');
const {REFRESH_TOKEN_LIFE} = require("./constants");
const {REFRESH_TOKEN_SECRET} = require("./constants");
const {ACCESS_TOKEN_LIFE} = require("./constants");
const {ACCESS_TOKEN_SECRET} = require("./constants");


const router = express.Router()

const userSchema = new mongoose.Schema({
    name: String,
    mail: String,
    phone: String,
    birth_date: String,
    passport_number: String,
    passport_date: String,
    passport_vendor: String,
    passport_code: String,
    licence_number: String,
    licence_date: String,
    password: String

})

const findUser = async ({mail, password}) => {
    const data = await User.find({mail, password})
    console.log(data)
}

const User = mongoose.model('User', userSchema)

router.get('/', async (req, res) => {
    const data = await User.find()
    res.send(data)
})

router.post('/signin', async (req, res) => {
    const response = await User.find({mail: req.body.mail, password: req.body.password})
    if (response[0]) {
        const payload = {
            userName: response[0].name,
            userID: response[0]._id
        }
        const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_LIFE});
        const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_LIFE});
        res.send({accessToken, refreshToken, payload})
    } else {
        res.status(401)
    }
})

router.post('/getcodeforrecovering', async (req, res) => {
    try {
        const code = Math.round(Math.random() * 10000)
        const tokenForPasswordRecovery = jwt.sign({code}, CODE_FOR_RECOVERY_TOKEN_SECRET, {expiresIn: 2400});
        console.log(req.body.mail, typeof req.body.mail, code)
        const user = await User.find({mail: req.body.mail})
        if (user[0]) {
            sendEmail(req.body.mail, code)
            res.send({tokenForPasswordRecovery})
        } else {
            res.send("Пользователя нет в системе")
        }
    } catch (e) {
        console.error(e)
    }
})

router.post('/recovery', async (req, res) => {
    console.log(req.body)
    jwt.verify(req.body.token, CODE_FOR_RECOVERY_TOKEN_SECRET, {}, err => {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        }
        const code = parseInt(req.body.code)
        const tokenForRecovery = jwt.sign({code}, RECOVERY_TOKEN_SECRET, {expiresIn: 6000})
        res.send(tokenForRecovery)
    })
})

router.post('/changepsw', async (req, res) => {
    jwt.verify(req.body.token, RECOVERY_TOKEN_SECRET, {}, async (err, payload) => {
        console.log(payload)
        if (err) {
            console.log(err);
            res.sendStatus(403);
        }
        const password = req.body.password
        const mail = payload.mail
        const response = await User.findOneAndUpdate({mail: mail}, {password: password})
        if (response[0]) {
            const payload = {
                userName: response[0].name,
                userID: response[0]._id
            }
            const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_LIFE});
            const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_LIFE});
            res.send({accessToken, refreshToken, payload})
        } else {
            res.status(401)
        }
    })

    const response = await User.find({mail: req.body.mail})
    if (response[0]) {
        const payload = {
            userName: response[0].name,
            userID: response[0]._id
        }
        const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_LIFE});
        const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_LIFE});
        res.send({accessToken, refreshToken, payload})
    } else {
        res.status(404)
    }
})

router.post('/', async (req, res) => {
    // req.body.password = "newpasswordfordatabase" // хэшировать здесь
    const userData = req.body;
    const newUser = new User(userData);
    const data = await newUser.save();

    const payload = {
        userName: data.name,
        userID: data._id
    }
    const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_LIFE});
    const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_LIFE});
    console.log({accessToken, refreshToken, payload})
    res.send({accessToken, refreshToken, payload});
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id)
    res.send(user)
})

module.exports = {
    usersRouter: router,
}

