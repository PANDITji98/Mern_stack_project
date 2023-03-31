import express  from "express";
import { createHotel, deleteHotel, findHotel, findHotelById, updateHotel } from "../controllers/hotelController.js";

const router = express.Router();

router.post("/createHotel", createHotel)

router.put("/updateHotel/:hotelID", updateHotel)

router.delete("/deleteHotel/:hotelID", deleteHotel)

router.get("/findHotel/:hotelID", findHotelById)

router.get("/findHotels", findHotel)


export default router