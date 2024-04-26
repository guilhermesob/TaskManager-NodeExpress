// Importações de módulos necessários
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Inicialização do aplicativo Express
var app = express();

// Configuração do diretório de visualizações e do motor de visualização
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // Atualizado para 'pug', que é o novo nome do Jade

// Configuração de middlewares
app.use(logger('dev')); // Middleware para logging no ambiente de desenvolvimento
app.use(express.json()); // Middleware para analisar o corpo das requisições JSON
app.use(express.urlencoded({ extended: false })); // Middleware para analisar o corpo das requisições URL-encoded
app.use(cookieParser()); // Middleware para analisar cookies
app.use(express.static(path.join(__dirname, 'public'))); // Middleware para servir arquivos estáticos do diretório 'public'

// Definição das rotas
app.use('/', require('./routes/index')); // Rota raiz
app.use('/users', require('./routes/users')); // Rota para usuários
app.use('/tasks', require('./routes/tasks')); // Rota para tarefas



// Tratamento de erros 404
app.use(function(req, res, next) {
 next(createError(404));
});

// Tratamento de erros gerais
app.use(function(err, req, res, next) {
 // Configuração de mensagens de erro e renderização de página de erro
 res.locals.message = err.message;
 res.locals.error = req.app.get('env') === 'development' ? err : {};
 res.status(err.status || 500);
 res.render('error');
});

// Exportação do aplicativo Express para uso em outros arquivos
module.exports = app;
