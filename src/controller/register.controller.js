const express = require('express');
const router = express.Router();
const User = require("../model/user.model")

router.get("/", async (req, res) => {
    try {
        const signups = await User.find();
        res.status(200).json(signups);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})



router.post("/", (req, res) => {
    const { name, email, password } = req.body;
  
    User.findOne({ email: email }, (err, user) => {
      //this is used to this email already exist or not
      if (user) {
        res.send({ message: "User already registered" });
        // alert("User already exist")
      } else {
        const user = new User({
          name,
          email,
          password,
        });
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.status(201).send({ message: "Successfully registered",user });
          }
        });
      }
    });
  });

  module.exports = router;