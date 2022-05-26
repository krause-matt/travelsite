import User from "../models/Users.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const findAllUsers = await User.find({});
    res.status(200).json(findAllUsers);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const findUser = await User.findById({ _id: req.params.id });
    res.status(200).json(findUser);
  } catch (err) {
    next(err);
  }
};

export const editUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteAllUsers = async (req, res, next) => {
  try {
    const deleteAllUsers = await User.deleteMany({});
    res.status(200).json(deleteAllUsers);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deleteUser = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(deleteUser);
  } catch (err) {
    next(err);
  }
};
