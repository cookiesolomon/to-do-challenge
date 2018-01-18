
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/toDoDB', function () {
    console.log("DB connection established!!!");
})

var Task = require('./models/toDoModel');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





app.get("/tasks", function (req, res) {
    Task.find((err, task) => {
        if (err) throw err;
        res.status(200).send(task);
    });
});

app.post('/tasks', function (req, res) {
    var task = new Task(
        { text: req.body.text }
    );
    task.save();
    console.log(task);
    res.send(task);
});








app.listen(8000, function () {
    console.log("what do you want from me! get me on 8000 ;-)");
});