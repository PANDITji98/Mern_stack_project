import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { createError } from "./errorHandling.js";


export const hashpassword = async (pass, saltRounds) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
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

export const validatePassword = async (pass, userPass) => {
  return new Promise((resolve,reject)=>{
    bcrypt.compare(pass, userPass , (err,user)=>{
      if(err){
        reject (err)
      } else {
        resolve(user)
      }
    })
  })
}

export const generateToken = async (data,key) => {
  return new Promise((resolve,reject)=>{
    jwt.sign(data,key , (err,token)=>{
      if(err){
        reject(err)
      } else {
        resolve(token)
      }
    })
  })
}

export const verToken = async (data,key) => {
  return new Promise((resolve,reject)=>{
    jwt.verify(data,key , (err,token)=>{
      if(err){
        reject(err)
      } else {
        resolve(token)
      }
    })
  })
}

