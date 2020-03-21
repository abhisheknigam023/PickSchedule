const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    collection: "Employee",
    versionKey: false
  }
);

module.exports = mongoose.model("Employee", EmployeeSchema);
