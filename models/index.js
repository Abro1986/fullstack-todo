let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-app');
module.exports.ToDo = require('./todo.js');