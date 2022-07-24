import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

// add Comment
router.post("/", verifyToken, addComment);

// delete Comment
router.delete("/:id", verifyToken, deleteComment);

// get Comments
router.get("/:videoId", getComments);

export default router;
