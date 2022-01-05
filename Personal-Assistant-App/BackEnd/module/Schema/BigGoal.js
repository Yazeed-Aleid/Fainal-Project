const mongoose = require("mongoose");
const { Schema } = mongoose;
const TasksSchema = require("./Tasks").schema;
// import Tasks from './Tasks'.Schema

const BigGoal = new Schema({
  name: {
    type: String,
    required: [true, "You Have to add Name of yore goal"],
  },
  type: {
    type: String,
    required: [true, "You Have to add type of yore goal"],
  },
  status: {
    type: String,
    required: [true, "You Have to add status of yore goal"],
  },
  startDate: {
    type: Date,
    required: [false, "You Have to add statr Date of yore goal"],
  },
  endDate: {
    type: Date,
    required: [false, "You Have to add end Date of yore goal"],
  },
  comment: {
    type: String,
    required: [false, "You Have to add comment of yore goal"],
  },
  tasks: [TasksSchema],
});

module.exports = mongoose.model("BigGoal", BigGoal);
