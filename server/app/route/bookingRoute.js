const express = require("express");
const router = express.Router();

const bookSlot = require("../controller/bookingController");

// Find all
router.get("/booking", bookSlot.get);

// Create new
router.post("/booking", bookSlot.post);

router.delete("/booking/:id", bookSlot.deleteById);

module.exports = router;
