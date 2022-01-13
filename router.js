const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("CRUD API tutorial");
});

module.exports = router;
