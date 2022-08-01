const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Ammu !");
});

module.exports = router;