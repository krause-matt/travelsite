import Hotel from "../models/Hotels.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const getAllHotels = async (req, res, next) => {
  try {
    const findAllHotels = await Hotel.find({});
    res.status(200).json(findAllHotels);
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const findHotel = await Hotel.findById({ _id: req.params.id });
    res.status(200).json(findHotel);
  } catch (err) {
    next(err);
  }
};

export const cityCount = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const cityCountResult = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(cityCountResult);
  } catch (err) {
    next(err);
  }
};

export const typeCount = async (req, res, next) => {
  try {
    const hotels = await Hotel.countDocuments({ type: "hotel" });
    const condos = await Hotel.countDocuments({ type: "condo" });
    const cabins = await Hotel.countDocuments({ type: "cabin" });
    const resorts = await Hotel.countDocuments({ type: "resort" });
    const villas = await Hotel.countDocuments({ type: "villa" });
    const cottages = await Hotel.countDocuments({ type: "cottage" });
    res.status(200).json([
      { type: "hotel", count: hotels },
      { type: "condo", count: condos },
      { type: "cabin", count: cabins },
      { type: "resort", count: resorts },
      { type: "villa", count: villas },
      { type: "cottage", count: cottages },
    ]);
  } catch (err) {
    next(err);
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
    next(err);
  }
};

export const deleteAllHotels = async (req, res, next) => {
  try {
    const deleteAllHotels = await Hotel.deleteMany({});
    res.status(200).json(deleteAllHotels);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const deleteHotel = await Hotel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(deleteHotel);
  } catch (err) {
    next(err);
  }
};
