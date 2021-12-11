const router = require('express').Router()
const Task = require('../module/Schema/Tasks');
const { json } = require('express');
const { model } = require('mongoose');


// get All tasks 

router.get('/.tasks', async (req, res) => {
  const tasks = await Task.find();
  
  res.json(tasks)
})

// git task with task id

router.get('/task/:id', async (req, res) => {
  const task = await Task.findById(req.body.id);

  res.json(task)

})

// post task

router.post('/postTask', (req, res) => {

  const newTask = new Task({
    ...req.body
  })
  newTask.save()

  res.status(200).json(newTask)

})

// Edit task
router.put("/editTask/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, {
      ...req.body
    });

    await task.save();

    const tasks = await Task.find();

    res.send(tasks);
  } catch (e) {
    console.log(e);
  }

});


// Delete task

router.delete('/deleteTask/:id', async (req, res) => {
  const task = await Task.findByIdAndDelete({ _id: req.params.id })

  if (!task) {
    return res.status(400).send('NotFound')
  }
  const tasks = await BigGoal.find()

  res.send(tasks)


})


module.exports = router;    