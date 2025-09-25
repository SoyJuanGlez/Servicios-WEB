const {randomUUID} = require('crypto');

let tasks = [
    { id: randomUUID(), title: 'Aprender Api Rest', completed: false},
    { id: randomUUID(), title: 'Utilizar el MVC en Api Rest', completed: false},
];

function findAll(){
    return tasks;
}

function addTask(data){
    const task = {
        id: randomUUID(),
        title: data.title,
        completed: false
    };
    tasks.push(task);
    return task;
}

function removeTask(id){
    const index = tasks.findIndex(task => task.id === id);
    if(index === -1)
        return false;
    tasks.splice(index, 1);
    return true;
}

//TAREA
function findTask(id){
    return tasks.find(task => task.id === id);
}

function updatetitletask(id, title){
    const task = tasks.find(task => task.id === id);
    if(!task)
        return null;
    task.title = title;
    return task;
}

function updatetaskcompleted(id, completed){
    const task = tasks.find(task => task.id === id);
    if(!task)
        return null;
    task.completed = completed;
    return task;
}


module.exports = {
    findAll,
    addTask,
    removeTask,
    findTask,
    updatetitletask,
    updatetaskcompleted
};