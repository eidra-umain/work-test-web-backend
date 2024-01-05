import express, { Request, Response } from 'express';
import { Filter } from '../models/filter';
import { getFilterById, getAllFilters } from '../services/FilterService';

const router = express.Router();

// Get all filters
router.get('/', (req: Request, res: Response) => {
  const filters: Filter[] = getAllFilters();
  res.json({ filters });
});

// Get filter by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const filter: Filter | undefined = getFilterById(id);

  if (filter) {
    res.json(filter);
  } else {
    res.status(404).json({ error: true, reason: 'Filter not found' });
  }
});

export default router;
