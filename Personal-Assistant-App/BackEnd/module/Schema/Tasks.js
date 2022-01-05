const mongoose = require("mongoose");
const { Schema } = mongoose;

const Tasks = new Schema({
  name: {
    type: String,
    required: [true, "You have To add Name of Task"],
  },
  status: {
    type: String,
    // required: [true, "You have To add task of Task"],
  },
});

module.exports = mongoose.model("Tasks", Tasks);
