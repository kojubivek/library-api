import dotenv from "dotenv";

dotenv.config();

import express from "express";
import { ERROR } from "./src/constant.js";

const app = express();
import { connectDB } from "./src/congfig/dbCongif.js";
import userRouter from "./src/router/userRouter.js";
connectDB();
const PORT = process.env.NODE_ENV || 8000;
app.use(express.json());

app.use("/api/v1/user", userRouter);

//all uncaught request
app.use("*", (req, res) => {
  res.json({
    message: "Request resources not found",
  });
});

//global error handler
app.use((error, req, res, next) => {
  const errorCode = error.code || 500;
  res.status(errorCode).json({
    status: ERROR,
    message: error.message,
  });
});

//run the server

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running on port http://localhost:${PORT}`);
});
