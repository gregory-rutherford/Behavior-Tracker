const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio= require("@feathersjs/socketio");
const cors = require("cors");

const mongoose = require("mongoose");
const service = require("feathers-mongoose");

const Model = require("./models/task");
const db = require("./models/index");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/behaviorTracker", {useNewUrlParser: true});

const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.configure(express.rest());
app.configure(socketio());
app.use(cors());



// app.use("/tasks", service({
//     Model,
//     lean: false    
// }));

// app.service("tasks").create({
//     storageId: 1,
//     taskName: "do laundry",
//     monday: false,
//     tuesday: true,
//     wednesday: false,
//     thursday: false,
//     friday: false,
//     saturday: false,
//     sunday: true
// }).then(function(task){
//     console.log("created task", task);
// });

//locate one task, for testing purposes
app.get("/api/data", function (req, res){
    db.Task.find({})
    .then(dbTask => {
        res.json(dbTask);
    })
    .catch(err=> res.json(err));
});

//locate task by unique mongo id
app.get("/api/data/:id", function(req, res) {
  db.Task.findOne({ _id: req.params.id })
    .then(dbTask => {
      res.json(dbTask);
    })
    .catch(err=> res.json(err));
});

//create new task, all booleans default to false
app.post("/api/data/", function(req, res){
    db.Task.create(req.body)
      .then(dbTask => {
        res.json(dbTask);
      })
      .catch(err => res.json(err));
});
//edit a task
app.put("/api/data/:id", function (req, res){
    db.Task.findOneAndUpdate({_id: req.params.id})
    .then()
})

//delete task
app.delete("/api/data/:id", function(req, res) {
  db.Task.findOneAndDelete({ _id: req.params.id })
    .then(dbTask => {
      res.json(dbTask);
    })
    .catch(err => res.json(err));
});


app.use(express.errorHandler());

const port = 3030;
app.listen(port, () => {
    console.log(`Feather server listening on port ${port}`)
});
