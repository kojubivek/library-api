import express from "express";
import { ERROR, SUCCESS } from "../constant.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: SUCCESS,
      message: "todo get user",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await createUser(req.body);
    result?._id
      ? res.json({
          status: SUCCESS,
          message: "User has been created successfully",
        })
      : res.json({
          status: ERROR,
          message: "User has been crated successfully, ypu may login now",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key")) {
      error.message = "email already in use";
      error.errorCode = 200;
    }

    next(error);
  }
});

export default router;
