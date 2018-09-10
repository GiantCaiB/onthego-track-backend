const express = require('express');
const router = express.Router();
const userService = require("../services/user");


router.post("/login", async (req, res, next) => {
  try {
    const user = await userService.authenticate(req.body);
    user
      ? res.json(user)
      : res
        .status(400)
        .json({ message: "Username or password is incorrect" });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    await userService.create(req.body);
    res.json({});
  } catch (err) {
    next(err);
  }
});

router.get("/getAll", async (req, res, next) => {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

