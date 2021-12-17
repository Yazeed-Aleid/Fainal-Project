
const mongoose = require('mongoose')
const { Schema } = mongoose;

const User = new Schema({
  username: {
    type: String,
    required: [true, "You have to Enter username"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "enter Youre email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Enter Yore password"]
  },
  phoneNumber: {
    type: String,
   required:true,
    unique: true
  },
  userType: {
    type: String,
    default: "normal"
  },
  // BigGoals: [BigGoal]

},{timestamps:true});


module.exports = mongoose.model("User", User);
