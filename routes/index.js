const express = require("express");

const router = express.Router();

router.get("/", async (_, res) => {
  const a = "안녕하세요";
  res.send(a);
});

module.exports = router;
