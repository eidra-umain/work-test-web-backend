import express, { Request, Response } from 'express'
import { Restaurant } from '../models/restaurant'
import {
  getAllRestaurants,
  getRestaurantById,
} from '../services/RestaurantService'

const router = express.Router()

// Get all restaurants
router.get('/', (req: Request, res: Response) => {
  const restaurants: Restaurant[] = getAllRestaurants()
  res.json({ restaurants })
})

// Get restaurant by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const restaurant: Restaurant | undefined = getRestaurantById(id)

  if (restaurant) {
    res.json(restaurant)
  } else {
    res.status(404).json({ error: true, reason: 'Restaurant not found' })
  }
})

export default router
