import mongoose from "mongoose";
import { Active } from "../../constant";

const userSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: Active,
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
