const mongoose = require("mongoose");

const RevenueSchema = new mongoose.Schema(
  {
    Revenue: {
      type: Number,
      required: true
    },
  },
  { timestamps: true }
);

const OrderSchema = new mongoose.Schema(
  {
    orderInfo: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "purchases",
      required: true 
    },
    product: [{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "product"
    }],
  },
  { timestamps: true }
);

const OrderModal = mongoose.model("order", OrderSchema);
module.exports = OrderModal;
