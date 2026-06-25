const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
{
  customerName: {
    type: String,
    required: true
  },

  productName: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  totalAmount: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    default: "Pending"
  }
},
{
  timestamps: true
}
);

module.exports = mongoose.model("Order", orderSchema);
