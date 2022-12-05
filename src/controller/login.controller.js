const express = require('express');
const router = express.Router();
const User = require("../model/user.model")


router.post("/", (req, res) => {
    const { email, password } = req.body;
   
      User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
            // console.log(user._id)
              res.send({ message: "Login Successful", user });
             } 
            else {
            res.send({ message: "Password didn't match" });
              }
        } 
        else {
          res.send({ message: "User not Registered" });
        }
      });
    
  });

  module.exports = router;