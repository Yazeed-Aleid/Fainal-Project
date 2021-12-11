const mongoose = require('mongoose')
const { Schema } = mongoose;

const Tasks = new Schema({
  name: {
    type: String,
    required: [true, "You have To add Name of Task"]
  },
  status: {
    type: Boolean
  }
});
module.exports = mongoose.model("Tasks", Tasks);
