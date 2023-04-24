import express  from "express";
import { createroom, deleteroom, findroom, findroomById, updateroom } from "../controllers/roomController.js";
import { verifyAdmin } from "../middlewares/authMain.js";

const router = express.Router();

router.post("/createRoom/:hotelId", verifyAdmin, createroom)

router.put("/updateRoom/:id", verifyAdmin, updateroom)

router.delete("/deleteRoom/:id/:hotelId", verifyAdmin, deleteroom)

router.get("/findRoom/:id", findroomById)

router.get("/findRooms", findroom)



export default router