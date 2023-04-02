import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createError } from "../utils/errorHandling.js";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(404, "No token found!"));
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
      if (err) {
        return next(createError(400, "Token not verfied"));
      } else {
        req.auth = info;
        console.log(req.auth);
        next();
      }
    });
  }
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    console.log("auth-user:::", req.auth);
    if (req.auth.id === req.params.id || req.auth.isAdmin) {
      next();
    } else {
      return next(createError(403, "Not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    console.log("auth-admin:::", req.auth);
    if (req.auth.isAdmin) {
      next();
    } else {
      return next(createError(403, "Not authorized!"));
    }
  });
};
