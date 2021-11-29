const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const adminSign = "Swebuser";

//Route 1 : Create a user using  POST  "/api/auth/createuser. Doesn't require Auth
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name ").isLength({ min: 3 }),
    body("password", "Password must be atleast 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    // if there are error return Bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check whether the user with this email exists already\
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists!" });
      }
      //   hashing password
      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);
      //If there are no error then Create a User
      user = await User.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      //generating Authentication Token
      const authtoken = jwt.sign(data, adminSign);
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error occured");
    }
  }
);

//Route 2: Authentication a user using  POST  "/api/auth/login. Doesn't require Auth
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // if there are error return Bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials !" });
      }

      // Compare password with database
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials !" });
      }

      // Sending payload to user
      const payload = {
        user: {
          id: user.id,
        },
      };
      //generating Authentication Token
      const authtoken = jwt.sign(payload, adminSign);
      res.json({ authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error occured");
    }
  }
);

// Route 3: Get loggedin User Details using  POST  "/api/auth/getuser. Login require
router.post("/getuser", fetchuser, async (req, res) => {
try {
    const userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send(user);
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error occured");
}

})
module.exports = router;
