const express = require("express");

const {
  register,
  resendVerifyEmail,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
  verifyEmail,
} = require("../../controllers/users");

const {
  validateBody,
  authenticate,
  upload,
  imageHandler,
} = require("../../middlewares");

const { schemas } = require("../../models/users");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);

router.get("/verify/:verificationToken", verifyEmail);

router.post(
  "/verify",
  validateBody(schemas.emailVerifySchema),
  resendVerifyEmail
);

router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch(
  "/subscription",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  imageHandler,
  updateAvatar
);

module.exports = router;
