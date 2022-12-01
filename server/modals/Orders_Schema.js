const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderNumber: { type: Number, required: true },
    orderDate: { type: Date, required: true },
    userDetails: { type: Object, required: true },
    sum: { type: String, required: true },
    itemsNumber: { type: Number, required: true },
  },
  { timeseries: true }
);

const OrderModal = mongoose.model("order", OrderSchema);
module.exports = OrderModal;
