const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    MobilePrefix: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const EmployeeSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    salary: { type: Number, required: true},
    position: {type: String, required: true},
    store: {type: mongoose.SchemaTypes.ObjectId, ref: "store",}
  },
  { timestamps: true }
);

const UserSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: {EmployeeSchema},
    },
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    country: CountrySchema,
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    dateOfBirth: {
      type: Date,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.statics.ByName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};

const UserModal = mongoose.model("user", UserSchema);
module.exports = UserModal;
