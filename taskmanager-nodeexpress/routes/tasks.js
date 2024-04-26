// routes/tasks.js

var express = require('express');
var router = express.Router();

// Lista de tarefas
var tasks = [
 { id: 1, name: 'Estudar Node.js', done: false },
 { id: 2, name: 'Desenvolver API', done: false },
 { id: 3, name: 'Testar a API', done: false },
];

// Rota para listar todas as tarefas
router.get('/', function(req, res, next) {
 res.json(tasks);
});

module.exports = router;
