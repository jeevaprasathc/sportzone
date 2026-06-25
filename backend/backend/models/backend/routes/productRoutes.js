const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "All products fetched successfully"
  });
});

router.get("/:id", (req, res) => {
  res.json({
    success: true,
    message: `Product ${req.params.id} details`
  });
});

router.post("/", (req, res) => {
  res.json({
    success: true,
    message: "Product added successfully"
  });
});

router.put("/:id", (req, res) => {
  res.json({
    success: true,
    message: `Product ${req.params.id} updated`
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    success: true,
    message: `Product ${req.params.id} deleted`
  });
});

module.exports = router;
