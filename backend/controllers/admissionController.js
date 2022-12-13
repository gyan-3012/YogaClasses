import asyncHandler from 'express-async-handler'
import Admission from '../models/admissionModel.js'

// @desc     Admission of user in yoga classes
// @route    POST /api/admission
// @access   Private
const userAdmission = asyncHandler(async (req, res) => {
  const { email, age, batch, month, year } = req.body

  const alreadyRegistered = await Admission.find({ email, month, year })

  if (alreadyRegistered.length > 0) {
    res.status(400)
    throw new Error(
      `You have already enrolled in the classes for ${month} month`
    )
  }

  const admissionInfo = await Admission.create({
    email,
    age,
    batch,
    month,
    year,
  })

  if (admissionInfo) {
    res.status(201).json({
      _id: admissionInfo._id,
      email: admissionInfo.email,
      age: admissionInfo.age,
      batch: admissionInfo.batch,
      month: admissionInfo.month,
      year: admissionInfo.year,
    })
  } else {
    res.status(400)
    throw new Error('Invalid form data')
  }
})

// @desc     Make payment of registered user
// @route    PUT /api/admission
// @access   Private
const userPayment = asyncHandler(async (req, res) => {
  const { email, month, year } = req.body

  const registeredUser = await Admission.find({ email, month, year })

  if (registeredUser.length > 0) {
    if (registeredUser[0].isPaid) {
      res.status(400)
      throw new Error(`You have already paid for the classes of ${month} month`)
    }

    const updatedInfo = await Admission.findByIdAndUpdate(
      registeredUser[0]._id,
      {
        isPaid: true,
      }
    )

    res.json({
      _id: updatedInfo._id,
      email: updatedInfo.email,
      age: updatedInfo.age,
      batch: updatedInfo.batch,
      month: updatedInfo.month,
      year: updatedInfo.year,
      isPaid: updatedInfo.isPaid,
    })
  } else {
    res.status(400)
    throw new Error(
      `Firstly fill the admission form for classes of ${month} month`
    )
  }
})

// @desc     Get Admission Details
// @route    GET /api/admission
// @access   Private
const getAdmissions = asyncHandler(async (req, res) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const date = new Date()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  const admissions = await Admission.find({ month, year })

  res.json(admissions)
})

export { userAdmission, userPayment, getAdmissions }
