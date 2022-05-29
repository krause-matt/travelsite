import Room from "../models/Rooms.js";
import Hotel from "../models/Hotels.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const getAllRooms = async (req, res, next) => {
  try {
    const findAllRooms = await Room.find({});
    res.status(200).json(findAllRooms);
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const findRoom = await Room.findById({ _id: req.params.id });
    res.status(200).json(findRoom);
  } catch (err) {
    next(err);
  }
};

export const editRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const deleteAllRooms = async (req, res, next) => {
  try {
    const deleteAllRooms = await Room.deleteMany({});
    res.status(200).json(deleteAllRooms);
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    const deleteRoom = await Room.findByIdAndDelete({ _id: req.params.id });
    try {
      await Hotel.findByIdAndUpdate(req.params.hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(deleteRoom);
  } catch (err) {
    next(err);
  }
};
