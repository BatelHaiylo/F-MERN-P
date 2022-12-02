const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema(
  {
    receiptNum: {
      type: String,
      require: true, 
      index:true, 
      unique:true
    },
    purchaserInfo: {
      itemsNum: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        require: true,
      },
      user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      }]
    },
    purchaseSum: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const PurchasesModal = mongoose.model("purchases", PurchaseSchema);
module.exports = PurchasesModal;
