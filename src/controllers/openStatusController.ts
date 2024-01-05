import express, { Request, Response } from 'express';
import { OpenStatus } from '../models/openStatus';
import { getOpenStatusByRestaurantId } from '../services/OpenStatusService';

const router = express.Router();

// Get open status by restaurant ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const openStatus: OpenStatus | undefined = getOpenStatusByRestaurantId(id);

  if (openStatus) {
    res.json(openStatus);
  } else {
    res.status(404).json({ error: true, reason: 'Open status not found' });
  }
});

export default router;
