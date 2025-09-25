const Task = require('../models/task.model');

exports.findAll = (req, res) => {
    const data = Task.findAll();
    res.status(200).json(data);
}

exports.addTask = (req, res) => {
    const createdTask = Task.addTask(req.body);
    res.status(201).json(createdTask);
}

exports.removeTask = (req, res) => {
    const id = req.params.id;
    const ok = Task.removeTask(id);
    if(!ok)
        return res.status(404).json({message: 'Tarea no encontrada'});
    res.status(204).json({message: 'Tarea eliminada'});
}

//TAREA
exports.findTask = (req, res) => {
    const id = req.params.id;
    const task = Task.findTask(id);
    if(!task)
        return res.status(404).json({message: 'Tarea no encontrada'});
    res.status(200).json(task);
}

exports.updatetitleTask = (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const task = Task.updatetitletask(id, title);
    if(!task)
        return res.status(404).json({message: 'Tarea no encontrada'});
    res.status(200).json(task);
}

exports.updatetaskcompleted = (req, res) => {
    const id = req.params.id;
    const completed = req.body.completed;
    const task = Task.updatetaskcompleted(id, completed);
    if(!task)
        return res.status(404).json({message: 'Tarea no encontrada'});  
    res.status(200).json(task);
}