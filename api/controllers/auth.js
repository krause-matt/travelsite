import User from "../models/Users.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res, next) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    login: req.body.login,
    password: hash,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).send("Login creation successful!");
  } catch (err) {
    return next(err);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const login = await User.findOne({ login: req.body.login });

    !login
      ? res.status(400).send("User not found")
      : res.status(200).json(login);
    res.status(200).json(login);
  } catch (err) {
    return next(err);
  }
};
