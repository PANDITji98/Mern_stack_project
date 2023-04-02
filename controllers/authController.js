import userSchema from "../models/userSchema.js";
import {
  generateToken,
  hashpassword,
  validatePassword,
} from "../utils/authFunctions.js";
import { createError } from "../utils/errorHandling.js";

export const register = async (req, res, next) => {
  const { username, email, country, img, city, phone, password } = req.body;
  try {
    if (!username || !email || !country || !city || !phone || !password) {
      return res.status(400).send("Please enter all the credentials to signup");
    } else {
      const existinguser = await userSchema.findOne({ email: email });
      if (existinguser) {
        return res.status(401).send("User already exists");
      } else {
        const hashedPassword = await hashpassword(password, 10);
        console.log(hashedPassword);
        const newUser = new userSchema({
          password: hashedPassword,
          username,
          email,
          country,
          img,
          city,
          phone,
        });
        await newUser.save();
        res.status(201).send("User registered!");
      }
    }
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return next(
        createError(400, "Please fill up all the credentials to continue")
      );
    } else {
      const existingUser = await userSchema.findOne({ email: email });
      if (!existingUser) {
        return next(createError(404, "User not found"));
      } else {
        const correctPass = await validatePassword(
          password,
          existingUser.password
        );
        if (!correctPass) {
          return next(createError(400, "Wrong credentials!"));
        } else {
          const token = await generateToken(
            { id: existingUser._id, isAdmin: existingUser.isAdmin },
            process.env.JWT_SECRET
          );
          console.log(token);
          const { password, isAdmin, ...rest } = existingUser._doc;
          res
            .cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json({ ...rest });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};
