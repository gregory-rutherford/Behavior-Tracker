const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio= require("@feathersjs/socketio");

const mongoose = require("mongoose");
const service = require("feathers-mongoose");

const Model = require("./models/task");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/behaviorTracker", {useNewUrlParser: true});

const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.configure(express.rest());
app.configure(socketio());

app.use("/tasks", service({
    Model,
    lean: true,
    paginate:{
        default: 2,
        max: 4
    }
}));

app.use(express.errorHandler());

app.service("tasks").create({
    storageId: 1,
    taskName: "do laundry",
    monday: false,
    tuesday: true,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: true
}).then(function(task){
    console.log("created task", task);
});



const port = 3030;
app.listen(port, () => {
    console.log(`Feather server listening on port ${port}`)
});