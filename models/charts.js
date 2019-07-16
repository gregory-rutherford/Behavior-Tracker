const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const Chart = mongoose.model("Chart", chartSchema);

module.exports = Chart;