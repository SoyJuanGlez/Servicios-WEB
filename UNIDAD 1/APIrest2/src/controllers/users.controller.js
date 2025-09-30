const Users = require('../models/user.model');

exports.findAll = (req, res) => {
    const data = Users.findAll();
    res.status(200).json(data);
}

exports.findById = (req, res) => {
    const id = req.params.id;
    const user = Users.findById(id);
    if(!user)
        return res.status(404).json({message: 'Usuario no encontrado'});
    res.status(200).json(user);
}

exports.addUser = (req, res) => {
    const createdUser = Users.addUser(req.body);
    res.status(201).json(createdUser);
}

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const user = Users.updateUser(id, req.body);
    if(!user)
        return res.status(404).json({message: 'Usuario no encontrado'});
    res.status(200).json(user);
}