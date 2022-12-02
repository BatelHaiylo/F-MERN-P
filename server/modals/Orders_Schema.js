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
    orderNumber: { 
      type: mongoose.SchemaTypes.ObjectId, 
      ref: "purchases",
      required: true 
    },
    product: { 
      type: [mongoose.SchemaTypes.ObjectId], 
      ref: "products"
    },
  },
  { timestamps: true }
);

const OrderModal = mongoose.model("order", OrderSchema);
module.exports = OrderModal;
