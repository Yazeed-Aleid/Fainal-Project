const mongoose = require("mongoose");
const { Schema } = mongoose;
// const Tasks = require('./Tasks')

const BigGoal = new Schema({
  name: {
    type: String,
    required: [true, "You Have to add Name of yore goal"]
  },
  type: {
    type: String,
    required: [true, "You Have to add type of yore goal"]
  },
  status: {
    type: String,
    required: [true, "You Have to add status of yore goal"]
  },
  startDate: {
    type: Date,
    required: [true, "You Have to add statr Date of yore goal"]
  },
  endDate: {
    type: Date,
    required: [true, "You Have to add end Date of yore goal"]
  },
  comment: {
    type: String,
    required: [true, "You Have to add comment of yore goal"]
  },
  // Tasks: [Tasks]
});
module.exports = mongoose.model("BigGoal", BigGoal);
