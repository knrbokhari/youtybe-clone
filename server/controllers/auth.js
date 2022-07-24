import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // checking user name
    const userName = await User.findOne({ name: req.body.name });
    if (userName) return next(createError(409, "User Already Exists!"));

    // checking user email
    const userEmail = await User.findOne({ email: req.body.email });
    if (userEmail) return next(createError(409, "User Already Exists!"));

    // new user
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    // checking user
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "User not found!"));

    // checking password
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

    // jwt
    const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);

    // removing password
    const { password, ...others } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};

// export const signup = async (req, res) => {}
