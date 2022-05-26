import User from "../models/Users.js";
import { errorHandler } from "../utils/errorHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    const user = await User.findOne({ login: req.body.login });
    if (user === null) return next(errorHandler(404, "User not found"));
    const passwordCheck = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (passwordCheck === false)
      return next(errorHandler(400, "Incorrect Login or Password."));

    const { password, isAdmin, ...otherInformation } = user._doc;

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY
    );
    res
      .cookie("auth_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherInformation });
  } catch (err) {
    next(err);
  }
};
