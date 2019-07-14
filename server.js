//server dependencies
const express = require ("express");
const mongoose = require("mongoose");
const routes = require("./routes");

//initialize
const app = express();
const PORT = process.env.PORT || 3001;


//middleware
app.use(express.urlencoded({extended: true}));

//server static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
};

//api and view
app.use(routes);

//connecto to mongoDB... mlab or local mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/behaviorTracker");

//start the server

app.listen(PORT, function(){
    console.log(`API is running on PORT ${PORT}`)
});