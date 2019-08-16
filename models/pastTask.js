const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pastTaskSchema = new Schema({
  date: {
    taskName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    monday: { type: Boolean },
    tuesday: { type: Boolean },
    wednesday: { type: Boolean },
    thursday: { type: Boolean },
    friday: { type: Boolean },
    saturday: { type: Boolean },
    sunday: { type: Boolean },
    hours: {
      type: Schema.Types.ObjectId,
      ref: "Hours"
    }
  }
});

const PastTask = mongoose.model("Task", pastTaskSchema);

module.exports = PastTask;
