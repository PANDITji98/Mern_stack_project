import express  from "express";
import { login, register } from "../controllers/authController.js";
import { verifyToken } from "../middlewares/authMain.js";

const router = express.Router();



// router.get("/getUser/:id")

router.post("/register", register)

router.post("/login", login)

// router.put("/editUser/:id")

// router.delete("/deleteUser/:id")


export default router