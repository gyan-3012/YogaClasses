import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { payment } from '../actions/userActions'

const PaymentScreen = () => {
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userPayment = useSelector((state) => state.userPayment)
  const { loading, error, success } = userPayment

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

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

  useEffect(() => {
    if (!userInfo) {
      navigate('/login?redirect=/payment')
    }
  }, [navigate, userInfo])

  const completePayment = (e) => {
    e.preventDefault()
    const amount = Number(e.target[0].value)
    if (amount !== 500) {
      setMessage('The monthly fee is 500/- Rs Only')
    } else {
      const paymentData = {
        email: userInfo.email,
        month: months[date.getMonth()],
        year: date.getFullYear(),
        amount: Number(e.target[0].value),
      }
      dispatch(payment(paymentData))
    }
  }

  return (
    <FormContainer>
      <h1>Payment Screen</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {success && <Message variant='success'>Paid Successfully</Message>}
      {loading && <Loader />}
      <Form onSubmit={completePayment}>
        <Form.Group controlId='amount'>
          <Form.Label>Enter amount</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter amount to be paid'
            min={500}
            max={500}
            name='amount'
          ></Form.Control>
        </Form.Group>

        <Button className='my-3' type='submit' variant='primary'>
          Pay Now
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
