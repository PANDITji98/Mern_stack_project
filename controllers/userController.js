import userSchema from "../models/userSchema.js";
import { createError } from "../utils/errorHandling.js";

export const createuser = async (req, res, next) => {
  const newuser = new userSchema(req.body);

  try {
    const user = await newuser.save();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const finduserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userSchema.findById(id);
    if (!user) {
      return next(createError(404, "No user found"));
    } else {
      return res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

export const finduser = async (req, res, next) => {
  try {
    const user = await userSchema.find();
    if (!user) {
      return next(createError(404, "No user found"));
    } else {
      return res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

export const updateuser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userSchema.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!user) {
      return next(createError(404, "No user found"));
    } else {
      return res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteuser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userSchema.findByIdAndDelete(id);
    if (!user) {
      return next(createError(404, "No user found"));
    } else {
      return res.status(200).json({ Msg: "user deleted" });
    }
  } catch (error) {
    next(error);
  }
};
