const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.route("/user");

// 회원목록 조회
router.get("/", async (_, res) => {
  const users = await User.findAll();
  console.log(users);
  res.send(users);
});

// 회원가입(등록)
router.post("/", async (req, res) => {
  const user = await User.create({
    login_id: req.body.login_id,
    password: req.body.password,
    nickname: req.body.nickname,
    role: req.body.role,
    comment: req.body.comment,
    phone_num: req.body.phone_num,
    rating_score: req.body.rating_score,
  });
  console.log(user);
  res.send(user);
});

module.exports = router;
