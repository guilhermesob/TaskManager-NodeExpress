const express = require('express');
const router = express.Router();
const taskController = require('./controllers/taskController');

// Rota para adicionar uma nova tarefa
router.post('/tasks', taskController.createTask);

// Rota para a página inicial
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});

// Exporta o router para ser usado em outros arquivos
module.exports = router;
