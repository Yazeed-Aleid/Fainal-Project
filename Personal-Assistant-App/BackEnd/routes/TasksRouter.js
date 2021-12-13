const router = require("express").Router();
const Task = require("../module/Schema/Tasks");
const { json } = require("express");
const { model } = require("mongoose");


// get All tasks

router.get("/tasks", async (req, res) => {
 try{
  console.log('kjhjh');
  const tasks = await Task.find();
  console.log('get req on /tasks')
  res.json(tasks);
 }catch(err){
   res.send('yazeed')
 }
});

// git task with task id


router.get("/gitTask/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    console.log(task);
    res.json(task);
  } catch (err) {
    res.send('Hello');
  }
});

// post task

router.post("/postTask", (req, res) => {
  try {
    const newTask = new Task({
      ...req.body,
    });
    newTask.save();

    res.status(200).json(newTask);
  } catch (err) {
    res.send(err);
  }
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
    console.log('Error');
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

