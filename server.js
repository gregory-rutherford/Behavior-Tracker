const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");
const cors = require("cors");

const mongoose = require("mongoose");

const db = require("./models/index");

mongoose.Promise = global.Promise;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/behaviorTracker"

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

const app = express(feathers());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set('useFindAndModify', false);

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.configure(express.rest());
app.configure(socketio());


//locate one task, for testing purposes
app.get("/api/data", function(req, res) {
  db.Task.find({})
    .populate("hours")
    .then(dbTask => {
      res.json(dbTask);
    })
    .catch(err => res.json(err));
});


//create new task, all booleans default to false
app.post("/api/data", function(req, res) {
  db.Task.create(req.body)
    .then(dbTask => {
      res.json(dbTask);
    })
    .catch(err => res.json(err));
});

//edit a task
app.put("/api/data/:id", async (req, res) => {
  db.Task.updateOne(
    { _id: req.params.id },
    { $set: req.body })
    .then(dbTask => {
      res.json(dbTask);
    })
      .catch(err => res.json(err));
    });

//delete task
app.delete("/api/data/:id", function(req, res) {
  db.Task.findById({ _id: req.params.id })
    .then(dbTask => dbTask.remove())
    .then(dbTask => res.json(dbTask))
    .catch(err => res.status(422).json(err));
});

//submit hours
app.post("/api/data/:id", function(req, res) {
  db.Hours.create(req.body)
    .then(function(dbHours) {
      return db.Task.findOneAndUpdate(
        { _id: req.params.id },
        { hours: dbHours._id },
      );
    })
    .then(function(dbTask) {
      res.json(dbTask);
    })
    .catch(function(err) {
      res.json(err);
    });
});

//view hours
app.get("/api/data/:id", function(req, res) {
  db.Task.findOne({ _id: req.params.id })
    .populate("hours")
    .then(function(dbTask) {
      res.json(dbTask);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.use(express.errorHandler());

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Feather server listening on port ${port}`);
});
