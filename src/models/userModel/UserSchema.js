import mongoose from "mongoose";
import { ACTIVE } from "../../constant.js";

const userSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: ACTIVE,
    },
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", userSchema);
