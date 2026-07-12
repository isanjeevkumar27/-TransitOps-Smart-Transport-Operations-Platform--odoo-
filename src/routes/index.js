import express from "express";

import authRoutes from "./auth.routes.js";
import vehicleRoutes from "./vehicle.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);

router.use("/vehicles", vehicleRoutes);

export default router;