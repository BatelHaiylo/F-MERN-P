const mongoose = require("mongoose");

const ClothingSchema = new mongoose.Schema(
  {
    company: { type: String, require: true },
    model: { type: String, require: true },
    size: { type: String, require: true },
    price: { type: Number, require: true },
    gender: { type: String, require: true },
    Length: { type: String, require: true },
    IsDryfit: { type: Boolean, require: true },
    img: { type: String, require: true }
  },
  {
    timeseries: true,
  }
);
const ClothingModel = mongoose.model("clothing", ClothingSchema);
module.exports = ClothingModel;
