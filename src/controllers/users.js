const User = require("../models/user")

//--Получить список всех пользователей--

const getUsers = (req, res) => {
    return User.find({})
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
}

//--Получить данные пользователя по его ID

const getUser = (req, res) => {
    const { user_id } = req.params
    return User.findById(user_id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
}

//--Создать нового пользователя

const createUser = (req, res) => {
    return User.create({ ...req.body })
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
}

//--Внести изменения в данные пользователя

const updateUser = (req, res) => {
    const { user_id } = req.params
    return User.findByIdAndUpdate(user_id, { ...req.body }, { new: true })
        .then((data) => {
            if (data === null)
                return res
                    .status(404)
                    .send(
                        `Error code: ${res.statusCode}. User with id: ${user_id} was not found`
                    )
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
}

//--Удалить пользователя по его ID

const deleteUser = (req, res) => {
    const { user_id } = req.params
    return User.findByIdAndDelete(user_id)
        .then((data) => {
            if (data === null)
                return res
                    .status(404)
                    .send(
                        `Error code: ${res.statusCode}. User with id: ${user_id} was not found`
                    )
            res.status(200).send("Success")
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}
