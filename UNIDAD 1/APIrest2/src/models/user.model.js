const {randomUUID} = require('crypto');
const express = require('express');

let users = [
    {
        id: randomUUID(),
        name: 'Juan',
        email: 'jucagonzalezde@ittepic.edu.mx',
        active: true,
        age: 22
    },
    {
        id: randomUUID(),
        name: 'Ana',
        email: 'ana@ittepic.edu.mx',
        active: true,
        age: 19
    }
];

function findAll(){
    return users;
}

function findById(id){
    return users.find(user => user.id === id) || null;
}

function isValidEmail(email) {
    // Validación básica de email
    return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function addUser(item){
    if (!item.name || typeof item.name !== 'string' || item.name.trim() === '') {
        throw new Error('El nombre es obligatorio');
    }
    if (!item.email || !isValidEmail(item.email)) {
        throw new Error('El email es obligatorio y debe tener un formato válido');
    }
    const user = {
        id: randomUUID(),
        age: item.age,
        name: item.name,
        email: item.email,
        active: true
    }
    users.push(user);
    return user;
}

function updateUser(id, data){
    const index = users.findIndex(user => user.id === id);
    if(index === -1) return null;

    users[index] = {
        ...users[index],
        name:typeof data.name === 'undefined' ? users[index].name : data.name,
        age:typeof data.age === 'undefined' ? users[index].age :Number(data.age),
        email:typeof data.email === 'undefined' ? users[index].email : data.email,
        active:typeof data.active === 'undefined' ? users[index].active : Boolean(data.active),
    }
    return users[index];
}

module.exports = {
    findAll,
    findById,
    addUser,
    updateUser
};