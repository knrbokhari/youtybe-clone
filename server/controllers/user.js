import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};

export const deleteUser = (req, res) => {
  res.json("");
};

export const getUser = (req, res) => {
  res.json("");
};

export const subscribe = (req, res) => {
  res.json("");
};

export const unsubscribe = (req, res) => {
  res.json("");
};

export const like = (req, res) => {
  res.json("");
};

export const dislike = (req, res) => {
  res.json("");
};
