const express = require("express");
const User = require("../models/user");

const router = express.Router();

// 회원 로그인
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.render("sequelize", { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
