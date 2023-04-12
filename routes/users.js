import express from "express";
import {
  createuser,
  deleteuser,
  finduser,
  finduserById,
  updateuser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../middlewares/authMain.js";

const router = express.Router();

// router.get("/check/:id", verifyAdmin, (req,res,next)=>{
//     res.send("checking")
// })

// router.get("/check/:id", verifyUser, (req,res,next)=>{
//     res.send("checking")
// })

router.post("/createuser", createuser);

router.put("/updateuser/:id", verifyUser, updateuser);

router.delete("/deleteuser/:id", verifyUser, deleteuser);

router.get("/finduser/:id", verifyUser, finduserById);

router.get("/findusers", verifyAdmin, finduser);

export default router;
