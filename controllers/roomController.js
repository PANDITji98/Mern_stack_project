import hotelSchema from "../models/hotelSchema.js";
import roomSchema from "../models/roomSchema.js";
import { createError } from "../utils/errorHandling.js";

export const createroom = async (req, res, next) => {
    const {hotelId} = req.params;
    const newroom = new roomSchema(req.body);
    try {
      const room = await newroom.save();
      try {
        await hotelSchema.findByIdAndUpdate(hotelId, {$push:{rooms:room._id}})
      } catch (error) {
        next(error)
      }
      res.status(200).json(room);
    } catch (error) {
      next(error)
    }
  };
  
  export const findroomById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const room = await roomSchema.findById(id);
      if (!room) {
        return next(createError(404, "No room found"))
      } else {
        return res.status(200).json(room);
      }
    } catch (error) {
      next(error)
    }
  };
  
  export const findroom = async (req, res, next) => {
    try {
      const room = await roomSchema.find();
      if (!room) {
        return next(createError(404, "No room found"))
      } else {
        return res.status(200).json(room);
      }
    } catch (error) {
      next(error)
    }
  };
  
  export const updateroom = async (req, res, next) => {
      const { id } = req.params;
      try {
        const room = await roomSchema.findByIdAndUpdate(id, {$set: req.body},{new:true});
        if (!room) {
          return next(createError(404, "No room found"))
        } else {
          res.status(200).json(room);
        }
      } catch (error) {
        next(error)
      }
    };
  
    export const deleteroom = async (req, res, next) => {
        const {id,hotelId} = req.params;
        try {
          const room = await roomSchema.findByIdAndDelete(id);
          try {
            await hotelSchema.findByIdAndUpdate(hotelId, {$pull:{rooms:id}})
          } catch (error) {
            next(error)
          }
          res.status(200).json(room);
        } catch (error) {
          next(error)
        }
      };
      
