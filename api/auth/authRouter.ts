import express from "express";
import { authController } from "./authController";

const router = express.Router();

router.post("/login/getMagicLink", authController.sendTokenForLogin);
router.post("/login/me", authController.getLoggedUserByToken);

export const authRouter = {
  router,
};
