import express, { Request, Response } from "express";
import { PriceRange } from "../models/priceRange";
import { getAllPriceRanges, getPriceRangeById } from "../services/PriceRangeService";

const router = express.Router();

// Get all price ranges
router.get("/", (req: Request, res: Response) => {
  const allPriceRanges: PriceRange[] = getAllPriceRanges();

  res.json(allPriceRanges);
});

// Get price range by ID
router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const priceRange: PriceRange | undefined = getPriceRangeById(id);

  if (priceRange) {
    res.json(priceRange);
  } else {
    res.status(404).json({ error: true, reason: "Price range not found" });
  }
});

export default router;
