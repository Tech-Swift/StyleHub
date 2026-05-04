const express = require("express");
const router = express.Router();
const Test = require("../models/Test");

router.post("/", async(req, res) => {
    try {
        const test = await Test.create({
            message: req.body.message || "Hello from DB"
        });

        res.json(test);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read all data
router.get("/", async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;