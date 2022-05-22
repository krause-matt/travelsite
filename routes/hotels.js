import express from "express";
import Hotel from "../models/Hotels.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// READ (All)
router.get("/all", async (req, res) => {
  try {
    const findAllHotels = await Hotel.find({});
    res.status(200).json(findAllHotels);
  } catch (err) {
    res.status(500).json(err);
  }
});

// READ (Single)
router.get("/:id", async (req, res) => {
  try {
    const findHotel = await Hotel.findById({ _id: req.params.id });
    res.status(200).json(findHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
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
    res.status(500).json(err);
  }
});

// DELETE (All)
router.delete("/all", async (req, res) => {
  try {
    const deleteAllHotels = await Hotel.deleteMany({});
    res.status(200).json(deleteAllHotels);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE (Single)
router.delete("/:id", async (req, res) => {
  try {
    const deleteHotel = await Hotel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(deleteHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
