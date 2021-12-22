const router = require("express").Router();
const Task = require("../module/Schema/Tasks");
const { json } = require("express");
const { model } = require("mongoose");
const User = require("./../module/Schema/User");
const BigGoal = require("./../module/Schema/BigGoal");

// get All tasks

router.get("/tasks", async (req, res) => {
  try {
    console.log("kjhjh");
    const tasks = await Task.find();
    console.log("get req on /tasks");
    res.json(tasks);
  } catch (err) {
    res.send("yazeed");
  }
});

// git task with task id

router.get("/gitTask/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    console.log(task);
    res.json(task);
  } catch (err) {
    res.send("Hello");
  }
});

// post task

router.post("/postTask/:id", async (req, res) => {
  // let bigGoal = [];

  const user = await User.findById({ _id: req.params.id }).then(async (user) => {
   
    console.log(user);
   let bigGoal = user.BigGoals.forEach((e) => {
    
      if (e._id == req.body.BigGoalID) {
        const newTask = new Task({
          name: req.body.name,
          status: req.body.status,

        });

        e.tasks.push(newTask);
        console.log(e.tasks);
        return e.tasks;
      }
    });
    
    try {
      await user.save();

      res.status(200).json(user);
    } catch (err) {
      res.send(err);
    }
  });
});

// Edit task
router.put("/editTask/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });

    await task.save();

    const tasks = await Task.find();

    res.send(tasks);
  } catch (e) {
    console.log("Error");
  }
});

// Delete task

router.delete("/deleteTask/:id", async (req, res) => {
  const task = await Task.findByIdAndDelete({ _id: req.params.id });

  if (!task) {
    return res.status(400).send("NotFound");
  }
  const tasks = await Task.find();

  res.send(tasks);
});
module.exports = router;
