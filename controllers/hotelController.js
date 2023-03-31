import hotelSchema from "../models/hotelSchema.js";

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
  const { hotelID } = req.params;
  try {
    const hotel = await hotelSchema.findById(hotelID);
    if (!hotel) {
      return res.status(404).json({ Msg: "No hotel found!" });
    } else {
      res.status(200).json(hotel);
    }
  } catch (error) {
    next(error)
  }
};

export const findHotel = async (req, res, next) => {
  try {
    const hotel = await hotelSchema.find();
    if (!hotel) {
      return res.status(404).json({ Msg: "No hotels found!" });
    } else {
      res.status(200).json(hotel);
    }
  } catch (error) {
    next(error)
  }
};

export const updateHotel = async (req, res, next) => {
    const { hotelID } = req.params;
    try {
      const hotel = await hotelSchema.findByIdAndUpdate(hotelID, {$set: req.body},{new:true});
      if (!hotel) {
        return res.status(404).json({ Msg: "No hotel found!" });
      } else {
        res.status(200).json(hotel);
      }
    } catch (error) {
      next(error)
    }
  };

export const deleteHotel = async (req, res, next) => {
    const { hotelID } = req.params;
    try {
      const hotel = await hotelSchema.findByIdAndDelete(hotelID);
      if (!hotel) {
        return res.status(404).json({ Msg: "No hotel found!" });
      } else {
        res.status(200).json({Msg: "Hotel deleted"});
      }
    } catch (error) {
      next(error)
    }
  };