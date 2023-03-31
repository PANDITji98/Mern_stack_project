import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const hashpassword = async (pass, salt) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(salt, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        bcrypt.hash(pass, salt, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      }
    });
  });
};