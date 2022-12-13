import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { admission } from '../actions/userActions'

const FormScreen = () => {
  const [message, setMessage] = useState()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userAdmission = useSelector((state) => state.userAdmission)
  const { loading, error, success } = userAdmission

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const batchInfo = [
    { _id: 1, batch: 'M-1', timing: '6-7 AM' },
    { _id: 2, batch: 'M-2', timing: '7-8 AM' },
    { _id: 3, batch: 'M-3', timing: '8-9 AM' },
    { _id: 4, batch: 'E-1', timing: '5-6 PM' },
  ]

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
      navigate('/login?redirect=/form')
    }
  }, [navigate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    const age = e.target[0].value
    const batch = e.target[1].value
    if ((age < 18 || age > 65)|| batch === 'null') {
      setMessage('Please fill all the fields')
    } else {
      const formData = {
        email: userInfo.email,
        age: Number(e.target[0].value),
        batch: e.target[1].value,
        month: months[date.getMonth()],
        year: date.getFullYear(),
      }
      dispatch(admission(formData))
    }
  }

  return (
    <FormContainer>
      <h1>Admission Form</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {success && <Message variant='success'>Form Submitted Successfully</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='age'>
          <Form.Label>Enter Your age</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter your age'
            min={18}
            max={65}
            name='Age'
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='batch'>
          <Form.Label>Select a Batch</Form.Label>
          <Form.Select name='batch'>
            <option value='null'>Select a Batch</option>
            {batchInfo.map((batch) => (
              <option
                key={batch._id}
                value={batch.batch}
              >{`Batch: ${batch.batch}, Timing: ${batch.timing}`}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button className='my-3' type='submit' variant='primary'>
          Submit
        </Button>
      </Form>
    </FormContainer>
  )
}

export default FormScreen
