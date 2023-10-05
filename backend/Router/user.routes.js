import { Router } from "express";
import { bookingTable, changePassword, forgotPassword, getBill, getProfile, loginUser, registerUser, resetPassword, status } from "../controller/user.controller.js";

const router = Router();

router
    .post("/register",registerUser)
    .post("/login",loginUser)
    .get("/bill",getBill)
    .post("/booking",bookingTable)
    .get("/status",status)
    .get("/profile",getProfile)
    .post("/forgot-password",forgotPassword)
    .post("reset-password", resetPassword)
    .post("/change-password",changePassword)

export default router;