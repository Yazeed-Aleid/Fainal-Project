const router = require("express").Router();
const BigGoal = require("../module/Schema/BigGoal");
const { json } = require("express");
const { model } = require("mongoose");
const User = require("./../module/Schema/User");

// get All goal

router.get("/bigGoals", async (req, res) => {
  try {
    const bigGoals = await BigGoal.find();
    res.json(bigGoals);
  } catch (err) {
    res.status(400).send("error");
  }
});

// git goal with goal id

router.get("/bigGoal/:id", async (req, res) => {
  try {
    const goal = await BigGoal.findById(req.params.id);
    res.json(goal);
  } catch (err) {
    res.send(err);
  }
});

// post

router.post(`/postGoal/:id`, async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    console.log(user);
    const newGoal = new BigGoal({
      name: req.body.name,
      type: req.body.type,
      status: req.body.status,
      comment: req.body.comment,
      endDate:req.body.endDate,
      task:req.body.task
    });
    user.BigGoals.push(newGoal);
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    res.send(err);
  }
});

// Edit goal
router.put("/editGoal/:id", async (req, res) => {
  try {
    const goal = await BigGoal.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });

    await goal.save();

    const goals = await BigGoal.find();

    res.send(goals);
  } catch (e) {
    console.log(e);
  }
});

// Delete goal

router.delete("/deleteGoal/:id", async (req, res) => {
  try {
    const goal = await BigGoal.findByIdAndDelete({ _id: req.params.id });

    if (!goal) {
      return res.status(400).send("NotFound");
    }
    const goals = await BigGoal.find();

    res.send(goals);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
