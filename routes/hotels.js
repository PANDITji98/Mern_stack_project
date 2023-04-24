import express  from "express";
import { countbyCity, createHotel, deleteHotel, findHotel, findHotelById, queryTest, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../middlewares/authMain.js";

const router = express.Router();

router.get("/Qtest/:id/:hotel/:test/q", queryTest)          //for testing purpose only

router.post("/createHotel", verifyAdmin, createHotel)

router.put("/updateHotel/:id", verifyAdmin, updateHotel)

router.delete("/deleteHotel/:id", verifyAdmin, deleteHotel)

router.get("/findHotel/:id", findHotelById)

router.get("/findHotels", findHotel)

router.get("/countByCity", countbyCity)


export default router