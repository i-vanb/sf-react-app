const express = require('express')
const mongoose = require('mongoose')

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

const User = mongoose.model('User', userSchema)

router.get('/', async (req, res) => {
    const data = await User.find()
    res.send(data)
})

router.post('/', async (req, res) => {
    const userData = req.body;
    console.log(req.body)
    const newUser = new User(userData);
    await newUser.save();
    res.send('User saved');
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id)
    res.send(user)
})

module.exports = {
    usersRouter: router
}

