import Hotel from "../models/Hotels.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    return next(err);
  }
};

export const getAllHotels = async (req, res, next) => {
  try {
    const findAllHotels = await Hotel.find({});
    res.status(200).json(findAllHotels);
  } catch (err) {
    return next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const findHotel = await Hotel.findById({ _id: req.params.id });
    res.status(200).json(findHotel);
  } catch (err) {
    return next(err);
  }
};

export const editHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    return next(err);
  }
};

export const deleteAllHotels = async (req, res, next) => {
  try {
    const deleteAllHotels = await Hotel.deleteMany({});
    res.status(200).json(deleteAllHotels);
  } catch (err) {
    return next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const deleteHotel = await Hotel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(deleteHotel);
  } catch (err) {
    return next(err);
  }
};
