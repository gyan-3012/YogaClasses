import express from 'express'
const router = express.Router()
import {
  userAdmission,
  userPayment,
  getAdmissions,
} from '../controllers/admissionController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router
  .route('/')
  .post(protect, userAdmission)
  .put(protect, userPayment)
  .get(protect, admin, getAdmissions)

export default router
