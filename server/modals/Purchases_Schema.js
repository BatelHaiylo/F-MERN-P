const mongoose = require('mongoose')

const PurchaseSchema = new mongoose.Schema(
  {
    receiptNum: {
      type: String,
      require: true,
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
      user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        },
    },
    purchaseSum: {
      type: Number,
      required: true,
    },
  },
  { timeseries: true }
);

const PurchasesModal = mongoose.model("purchases", PurchaseSchema)
module.exports = PurchasesModal;