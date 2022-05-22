import express from "express";
import { createUser, userLogin } from "../controllers/auth.js";

const router = express.Router();

// REGISTER
router.post("/register", createUser);

// LOGIN
router.post("/login", userLogin);

export default router;
