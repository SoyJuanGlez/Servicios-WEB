const {Router} = require('express');

const controller = require('../controllers/tasks.controller');

const routes = Router();

routes.get('/', controller.findAll);
routes.get('/:id', controller.findTask);
routes.post('/', controller.addTask);
routes.delete('/:id', controller.removeTask);
routes.put('/:id', controller.updatetitleTask);
routes.patch('/:id', controller.updatetaskcompleted);

module.exports = routes;