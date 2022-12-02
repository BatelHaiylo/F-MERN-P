const mongoose = require("mongoose");

// const SaleSchema = new mongoose.Schema(
//   {
//     saleName: { type: String, required: true },
//     startDate: { type: Date, required: true },
//     endDate: { type: Date, required: true },
//     categories: { type: Object, required: true },
//     discountPercentage: { type: Number, required: true },
//     isOnline: { type: Boolean, required: true },
//   },
//   { timestamps: true }
// );

const DepartmentSchema = new mongoose.Schema(
  {
    departmentName: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);


const ProductSchema = new mongoose.Schema(
  {
    ProductName: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    department: {
      type: DepartmentSchema,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    isOnSale: {
      type: Boolean,
      required: true,
    },
    sale: {
        saleName: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        discountPercentage: { type: Number },
        salePrice: { type: Number },
        isOnline: { type: Boolean },
    }
  },
  { timestamps: true }
);


const ProductModal = mongoose.model("product", ProductSchema);
module.exports = ProductModal;
