const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HoursSchema = new Schema({
    hours: Number
});

const Hours = mongoose.model("Hours", HoursSchema);

module.exports = Hours;