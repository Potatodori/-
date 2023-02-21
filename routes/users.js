const express = require("express");
const bcrypt = require("bcrypt");
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
  const ID = req.body.login_id;
  const existed_id = await User.findOne({ where: { login_id: ID } });
  if (existed_id) {
    console.log("이미 등록된 아이디입니다.");
    res.send("이미 등록된 아이디입니다.");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(req.body.password, salt);
    console.log("------------------------------------------------------");
    console.log(hashed_password);
    console.log("------------------------------------------------------");
    const user = await User.create({
      login_id: req.body.login_id,
      password: hashed_password,
      nickname: req.body.nickname,
      role: req.body.role,
      comment: req.body.comment,
      phone_num: req.body.phone_num,
      rating_score: req.body.rating_score,
    });
    console.log(user);
    res.json(user);
  }
});

module.exports = router;
