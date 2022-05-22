import User from "../models/Users.js";
import { errorHandler } from "../utils/errorHandler.js";
import bcrypt from "bcrypt";
import { json } from "express";

export const createUser = async (req, res, next) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    login: req.body.login,
    email: req.body.email,
    password: hash,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).send("Login creation successful!");
  } catch (err) {
    next(err);
  }
};

export const userLogin = async (req, res, next) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const login = await User.findOne({ login: req.body.login });
    if (login === null) return next(errorHandler(404, "User not found"));
    const passwordCheck = await bcrypt.compare(
      req.body.password,
      login.password
    );
    if (passwordCheck === false)
      return next(errorHandler(400, "Incorrect Login or Password."));
    res.status(200).json(login);
  } catch (err) {
    next(err);
  }
};
