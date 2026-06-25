const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "All orders fetched"
  });
});

router.post("/", (req, res) => {
  res.json({
    success: true,
    message: "Order placed successfully"
  });
});

router.put("/:id", (req, res) => {
  res.json({
    success: true,
    message: `Order ${req.params.id} updated`
  });
});

module.exports = router;
