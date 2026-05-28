import express from "express";

import { signUp, verify } from "../controllers/auth.contollers.js";

// Router
const authRouter = express.Router();

// Sign up
authRouter.post("/signUp", signUp);

// Email verification
authRouter.get("/verify/:code", verify);

// log in
authRouter.post("/login", login);

export default authRouter;