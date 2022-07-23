import express from "express";
import { signin, signup } from "../controllers/auth.js";

const routes = express.Router();

// create a user
routes.post("/signup", signup);

// sign in
routes.post("/signin", signin);

// google auth
routes.post("/google");

export default routes;
