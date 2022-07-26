import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const routes = express.Router();

// create a user
routes.post("/signup", signup);

// sign in
routes.post("/signin", signin);

// google auth
routes.post("/google", googleAuth);

export default routes;
