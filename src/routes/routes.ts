import express from "express";
import restaurantController from "../controllers/restaurantController";
import openStatusController from "../controllers/openStatusController";
import filterController from "../controllers/filterController";
import priceRangeController from "../controllers/priceRangeController";

const router = express.Router();

// Define routes for each controller
router.use("/restaurants", restaurantController);
router.use("/open", openStatusController);
router.use("/filter", filterController);
router.use("/price-range", priceRangeController);

export default router;
