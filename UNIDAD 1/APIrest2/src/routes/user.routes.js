const {Router} = require('express');

const controller = require('../controllers/users.controller');

const routes = Router();

routes.get('/', controller.findAll);
routes.get('/:id', controller.findById);
routes.post('/', controller.addUser);
routes.put('/:id', controller.updateUser);

module.exports = routes;