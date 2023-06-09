import hotelSchema from "../models/hotelSchema.js";
import { createError } from "../utils/errorHandling.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new hotelSchema(req.body);

  try {
    const hotel = await newHotel.save();
    res.status(200).json(hotel);
  } catch (error) {
    next(error)
  }
};

export const findHotelById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const hotel = await hotelSchema.findById(id);
    if (!hotel) {
      return next(createError(404, "No hotel found"))
    } else {
      return res.status(200).json(hotel);
    }
  } catch (error) {
    next(error)
  }
};

export const findHotel = async (req, res, next) => {
  try {
    const hotel = await hotelSchema.find();
    if (!hotel) {
      return next(createError(404, "No hotel found"))
    } else {
      return res.status(200).json(hotel);
    }
  } catch (error) {
    next(error)
  }
};

export const updateHotel = async (req, res, next) => {
    const { id } = req.params;
    try {
      const hotel = await hotelSchema.findByIdAndUpdate(id, {$set: req.body},{new:true});
      if (!hotel) {
        return next(createError(404, "No hotel found"))
      } else {
        res.status(200).json(hotel);
      }
    } catch (error) {
      next(error)
    }
  };

export const deleteHotel = async (req, res, next) => {
    const { id } = req.params;
    try {
      const hotel = await hotelSchema.findByIdAndDelete(id);
      if (!hotel) {
        return next(createError(404, "No hotel found"))
      } else {
        return res.status(200).json({Msg: "Hotel deleted"});
      }
    } catch (error) {
      next(error)
    }
  };

  export const queryTest = async (req, res, next) => {
   console.log("Req.Params::::",req.params)
   console.log("Req.Query::::",req.query)
  };
  

  export const countbyCity = async (req, res, next) => {
    const {cities} = req.query;
    const allCities  = cities.split(",");
   try {
    const list = await Promise.all(allCities.map(city=>{
      return hotelSchema.countDocuments({city:city})
    }))
    res.status(200).json(list)
   } catch (error) {
    next(error)
   }
  };
  