var router = require("express").Router();

router.use("/", require("./bookingRoute"));

module.exports = router;
