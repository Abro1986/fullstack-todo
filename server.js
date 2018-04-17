let db = require('./models');

//require express in the app
let express = require('express'),
 bodyParser = require('body-parser');

//new express app called 'app'
let app = express();

//serve static files in public
app.use(express.static('public'));

//body parser config to accept out datatypes
app.use(bodyParser.urlencoded({extended: true}));

//set variable for the server port
let port = 3000;

let ToDo = require('./models/todo')

let rakeLeaves = new ToDo({
	task: "raking leaves",
	difficulty: 'its pretty easy'
});

let doDishes = new ToDo({
	task: "wash dishes",
	difficulty: 'easy'
})

rakeLeaves.save(function(err, newTodo){
	if(err) {return console.log(err);}
	console.log("saved new task: ", newTodo);

});

doDishes.save(function(err, newTodo){
	if(err) {return console.log(err);}
	console.log("saved new task: ", newTodo);

});





