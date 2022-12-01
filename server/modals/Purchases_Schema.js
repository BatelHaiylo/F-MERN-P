const mongoose = require('mongoose')

const PurchaseSchema = new mongoose.Schema(
  {
    receiptNum: {
      type: String,
      require: true,
    },
    purchaserInfo: {
      type: String,
      required: true,
    },
    purchaseSum: {
      type: Number,
      required: true,
    },
    itemsNum: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      require: true,
    },
  },
  { timeseries: true }
);

const PurchasesModal = mongoose.model("purchases", PurchaseSchema)
module.exports = PurchasesModal;