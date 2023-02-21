const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/a", (_, res) => {
  const a = "안녕하세요";
  res.send(a);
});

module.exports = router;
