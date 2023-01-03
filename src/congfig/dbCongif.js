import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      return console.log(
        "Make Sure variable MOGO_URL has mongodb connection link"
      );
    }
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.MONGO_URL);
    conn && console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
