const express = require("express");
const mongose = require("mongoose");
const registrationRoute = require("./routes/registrationRouter");
const bigGoalRouter = require('./routes/BigGoalRouter')
// set up express
const app = express();
app.use(express.json());
//This variable is for online hosting like heroku or our localhost:3001

const PORT = 3001;

// set up Mongoose
const URL = 'mongodb+srv://yazeed1122:yazeed1122@mangodb.ju3ap.mongodb.net/PersonalAssistantDB?retryWrites=true&w=majority'


mongose.connect(URL).then(console.log('We Are Connecting '))

app.use("/registration", registrationRoute)
app.use('/biggoal',bigGoalRouter)

app.listen(PORT, () =>
  console.log(`THe server is connecting on port:${PORT} `)
);
