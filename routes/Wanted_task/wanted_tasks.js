const express = require("express");
const Wanted_task = require("../../models/wanted_task")

const router = express.Router();

router.route("/job");

// 알바글 등록 API
router.post("/", async (req, res) => {
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

  res.json(job);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { _id: id } });

  if (user) {
    res.send({ id: user._id, name: user.name, email: user.email });
  } else {
    res.status(500).send("해당 유저를 찾을 수 없음");
  }
});

module.exports = router;
