const mongoose = require("mongoose");

const RevenueSchema = new mongoose.Schema(
  {
    Revenue: {
      type: Number,
      required: true
    },
  },
  { timeseries: true }
);

const OrderSchema = new mongoose.Schema(
  {
    orderNumber: { type: Number, required: true },
    orderDate: { type: Date, required: true },
    userDetails: { type: mongoose.SchemaTypes.ObjectId, ref: "User"},
    itemsNumber: { type: Number, required: true },
    sum: { type: String, required: true },
  },
  { timeseries: true }
);

const OrderModal = mongoose.model("order", OrderSchema);
module.exports = OrderModal;
