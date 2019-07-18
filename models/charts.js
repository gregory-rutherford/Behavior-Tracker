const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//chart holds the week data i.e. (6/1/19-6/7/19) should reference the task model.

const chartSchema = new Schema({
  dates: { type: Date },
  taskName: { type: String, required: true },
  monday: { type: boolean, default: false },
  tuesday: { type: boolean, default: false },
  wednesday: { type: boolean, default: false },
  thursday: { type: boolean, default: false },
  friday: { type: boolean, default: false },
  saturday: { type: boolean, default: false },
  sunday: { type: boolean, default: false }
});

const Chart = mongoose.model("Chart", chartSchema);

module.exports = Chart;
