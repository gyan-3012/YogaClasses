import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Container } from 'react-bootstrap'
import Batch from '../components/Batch'

const HomeScreen = () => {
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const formHandler = () => {
    navigate('/login?redirect=/form')
  }

  const paymentHandler = () => {
    navigate('/login?redirect=/payment')
  }

  const getAdmissionsHandler = () => {
    navigate('/admissions')
  }

  return (
    <>
      <Batch />
      <Container className='d-flex justify-content-center flex-wrap'>
        <Button
          type='button'
          className='my-2 ms-0'
          md={12}
          onClick={formHandler}
        >
          Fill the Form
        </Button>
        <Button type='button' className='m-2' onClick={paymentHandler}>
          Make a Payment
        </Button>
        <Button
          type='button'
          className='my-2'
          onClick={getAdmissionsHandler}
          disabled={!userInfo || !userInfo.isAdmin}
        >
          Admission Details
        </Button>
      </Container>
    </>
  )
}

export default HomeScreen
