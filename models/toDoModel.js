
var mongoose = require('mongoose');



var taskSchema = new mongoose.Schema({
    text: String
});




var Task = mongoose.model('task', taskSchema);

module.exports = Task;