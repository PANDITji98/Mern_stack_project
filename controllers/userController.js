import userSchema from "../models/userSchema.js";
import bcrypt from "bcrypt";
import { hashpassword } from "../utils/authFunctions.js";

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
        // const stringPass = hashedPassword.toString()
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
  } catch (error) {
    next(error);
  }
};
