import express  from "express";
import { register } from "../controllers/userController.js";

const router = express.Router();

// router.get("/getAllUsers")

// router.get("/getUser/:userID")

router.post("/register", register)

// router.post("/login")

// router.put("/editUser/:userID")

// router.delete("/deleteUser/:userID")


export default router