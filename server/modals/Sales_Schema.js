const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema(
  {
    saleName: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    categories: { type: Object, required: true },
    discountPercentage: { type: Number, required: true },
    isOnline: { type: Boolean, required: true },
  },
  { timeseries: true }
);

const SaleModal = mongoose.model("sale", SaleSchema);
module.exports = SaleModal;