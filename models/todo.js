const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ToDoSchema = new Schema({
	task: String,
	difficulty: String,
});

let ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDo;