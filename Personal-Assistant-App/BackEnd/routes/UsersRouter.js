const router = require("express").Router();
const User = require("../module/Schema/User");
const { json } = require("express");
const { model } = require("mongoose");

// get All Users

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
  console.log("jioik");
});

// git user with user id

router.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  res.json(user);
});

router.get("/userGoals/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  res.send(user.BigGoals);
});
// Edit user
router.put("/editUser/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });

    await user.save();

    const users = await User.find();

    res.send(users);
  } catch (e) {
    console.log(e);
  }
});

// Delete user

router.delete("/deleteUser/:id", async (req, res) => {
  const user = await User.findByIdAndDelete({ _id: req.params.id });

  if (!user) {
    return res.status(400).send("NotFound");
  }
  const users = await User.find();

  res.send(users);
});

module.exports = router;
