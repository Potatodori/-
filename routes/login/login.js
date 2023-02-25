const express = require("express");
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.route("/login");

// 회원 로그인

//1. 유저 DB에서 아이디 같은사람 가져오기
//2. 아이디 다르면 에러
//3. 비밀번호 다르면 에러(bcrypt 복호화)
//4. 둘다 맞으면 토큰 만들어 보내기

router.post("/", async (req, res) => {
  //1. 유저 DB에서 아이디 같은사람 가져오기

  const UserId = req.body.login_id;

  const existedId = await User.findOne({ where: { login_id: UserId } });
  if (!existedId) {
    res.send("가입되지 않은 ID입니다.");
    return;
  }

  const userPassword = req.body.password;
  const existedPassword = existedId.password;
  const isAllowed = await bcrypt.compare(userPassword, existedPassword);
  if (!isAllowed) {
    res.send("비밀번호가 다릅니다.");
    return;
  }
  const name = UserId;
  const secretKey = "secret";
  const accessToken = jwt.sign({ name }, secretKey);
  res.send(accessToken);
});

module.exports = router;
