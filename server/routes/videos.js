import express from "express";
import {
  addVideo,
  addView,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo);

// update a video
router.put("/:id", verifyToken, updateVideo);

// delete a video
router.delete("/:id", verifyToken, addVideo);

// get a video
router.get("/find/:id", getVideo);

// adding View to a video
router.put("/view/:id", addView);

// get trend video
router.get("/trend", trend);

// get rendom video
router.get("/random", random);

// get sub video
router.get("/sub", verifyToken, sub);

// get video tags
router.get("/tags", getByTag);

// search video by name
router.get("/search", search);

export default router;
