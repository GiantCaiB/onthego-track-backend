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

router.get("/test", async (req, res, next) => {
  res.send({ "Test": "Success" });
});

module.exports = router;

