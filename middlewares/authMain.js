import { createError } from "../utils/errorHandling.js";
import { verToken } from "../utils/authFunctions.js";

// export const verifyToken = async (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) return next(createError(404, "No token found!"));

//   jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
//     if (err) return next(createError(400, "Token not verfied"));
//     req.auth = info;
//     console.log(req.auth);
//     next();
//   });
// };

export const verifyUser = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(404, "No token found!"));
  } else {
   const vT = await verToken(token, process.env.JWT_SECRET);
   if(req.params.id === vT.id || vT.isAdmin){
    console.log("params-id:::", req.params.id)
    console.log("vT-id:::", vT.id)
    next()
   } else {
    return next(createError(403, "Not authorized!"));
   }
  }
};
export const verifyAdmin = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(404, "No token found!"));
  } else {
   const vT = await verToken(token, process.env.JWT_SECRET);
   if(vT.isAdmin){
    next()
   } else {
    return next(createError(403, "Not authorized!"));
   }
  }
};
