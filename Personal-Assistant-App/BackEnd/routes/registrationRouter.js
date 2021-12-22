const router = require("express").Router();
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const User = require("../module/Schema/User");
const auth = require("../middleware/auth");
const { json } = require("express");

// Register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt);
    // const emailWordHash = await bcrypt.hash(req.body.email, salt);
    console.log("yzacd");

    const newUser = new User({
      ...req.body,
      password: passwordHash,
    });

    const user = await newUser.save();

    const { password, ...others } = user._doc;
    const token = JWT.sign({ id: user._id, username: user.username }, "SHHHHH");

    res.status(200).json({
      token,
      user: others,
    });

    // catching Eroor
  } catch (err) {
    res.status(500).send(err);
  }
});

///////////////////////////////////////////////////////

// login router
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password) {
      return res.status(400).json({ msg: "NOT all fild has been enterd" });
    }
    // checking email that was enterd and compiring email in our DB

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ msg: "No account with this Email" });
    }

    // checking Password entered and compiring with Hashed password in db

    bcrypt.compare(password, "superSecret");
    let isMatch = password === user.password;
    console.log(isMatch);

    if (isMatch === false) {
      res.status(400).send("Wrong Password");
      // console.log("Eroor");
    } else {
      // res.json({message:'we are done '})
      const token = JWT.sign(
        { id: user._id, username: user.username },
        "SHHHHH"
      );

      res.status(200).json({
        token,
        user: {
          ...req.body,
        },
      });

      console.log("Hello");
    }

    // creating our json web token by passing the user id and our JWT_secreat
  } catch (err) {
    res.status(500).json({ msg: "err" });
  }
});
// // delete user account

// router.delete("delete", async (req, res) => {
//   try {
//     const deleteUser = await User.findByIdAndDelete(req.user);
//     res.json(deleteUser);
//   } catch (err) {
//     res.status(500).json({ msg: err });
//   }
// });

module.exports = router;
