import express  from "express";
import { createHotel, deleteHotel, findHotel, findHotelById, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../middlewares/authMain.js";

const router = express.Router();

router.post("/createHotel", verifyAdmin, createHotel)

router.put("/updateHotel/:id", verifyAdmin, updateHotel)

router.delete("/deleteHotel/:id", verifyAdmin, deleteHotel)

router.get("/findHotel/:id", findHotelById)

router.get("/findHotels", findHotel)


export default router