const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const taskSchema = new Schema({
    storageId: Number,
    taskName: String,
    date: Date.now(),
    
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;