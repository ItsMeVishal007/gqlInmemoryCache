import mongoose from "mongoose";

export const Company = mongoose.model(
  "Company",
  new mongoose.Schema({
    name: {
      require: true,
      type: String,
    },
  })
);

export const Employee = mongoose.model(
  "Employee",
  new mongoose.Schema({
    name: {
      require: true,
      type: String,
    },
    name: {
      require: true,
      type: String,
    },
    age: {
      require: true,
      type: String,
    },
  })
);
