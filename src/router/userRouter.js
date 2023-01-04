import express from "express";
import { ERROR, SUCCESS } from "../constant.js";
const router = express.Router();
import { createUser } from "../models/userModel/UserModel.js";

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

// create new user
router.post("/", async (req, res, next) => {
  try {
    const result = await createUser(req.body);

    result?._id
      ? res.json({
          status: SUCCESS,
          message: "User has been created successfully, You may login now",
        })
      : res.json({
          status: ERROR,
          message: "User has been created successfully, You may login now",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key")) {
      error.message = "There is another user exist with this email";
      error.errorCode = 200;
    }

    next(error);
  }
});

export default router;
