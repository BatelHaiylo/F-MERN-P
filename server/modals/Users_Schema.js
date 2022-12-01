const mongoose = require('mongoose')

const SaleSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: "user"
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timeseries: true }
);

const SaleModal = mongoose.model("sale", SaleSchema)
module.exports = SaleModal;