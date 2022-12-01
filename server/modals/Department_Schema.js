const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema(
  {
    departmentName: {
      type: String,
      required: true
    },
  },
  { timeseries: true }
);

const DepartmentModal = mongoose.model("department", DepartmentSchema)
module.exports = DepartmentModal;