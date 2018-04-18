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
	//difficulty: 'its pretty easy'
});

let doDishes = new ToDo({
	task: "wash dishes",
	//difficulty: 'easy'
})

// rakeLeaves.save(function(err, newTodo){
// 	if(err) {return console.log(err);}
// 	console.log("saved new task: ", newTodo);

// });

// doDishes.save(function(err, newTodo){
// 	if(err) {return console.log(err);}
// 	console.log("saved new task: ", newTodo);

// });

//console.log(db.ToDo)

app.get('/', function(req, res) {
	res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api/todos', function(req, res) {
//	console.log("working")
	db.ToDo.find(function(err, todos) {
		if (err) {
			console.log("index error: " + err);
			res.sendStatus(500);
		}
		res.json(todos)
	});
});
//delete objects by difficulty easy, but how can we find one via the mongoose id
app.delete('/api/todos', function(req, res) {
	db.ToDo.findOneAndRemove({"difficulty": "easy"}, function(err, todos) {
		if (err) return res.status(500).send(err);
		console.log('problem')
		const response = {
		message: "deleted",
		//id: todo._id
		};
	return res.status(200).send(response);
	});
});

app.get('/api/todos/:id', function(req, res) {
	console.log(req.params.id)
	db.ToDo.findById({_id: req.params.id} , function(err, todos) {
		console.log(todos)
		if (err) return res.status(500).send(err);
		//let id = req.params.id;
		//for(i=0; i < todos.length; i++) {
			//if (todos[i].id == req.parms.id) {
				res.send(todos);

	//			break;
//			}
//		}
	});
});

// app.get('/api/todos/:id', function (req, res){
// 	console.log('trying to delete');
// 	db.ToDo.findOneAndRemove({_id : req.params.id}, function(err, todos){
// 		if (err) {
// 			console.log('error')
// 			res.sendStatus(500)
// 		}
// 			todoRemove = req.params.id
// 			res.json(todoRemove)
// 	});	
// });

app.listen(port, ()=> {
  console.log(`App is locked and loaded on ${port}`);
});
