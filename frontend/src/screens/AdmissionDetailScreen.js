import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getAdmissions } from '../actions/userActions'

const AdmissionDetailScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const batches = {
    'M-1': '6-7 AM',
    'M-2': '7-8 AM',
    'M-3': '8-9 AM',
    'E-1': '5-6 PM',
  }

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

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userAdmissionDetails = useSelector(
    (state) => state.userAdmissionDetails
  )
  const { loading, admissions, error } = userAdmissionDetails

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      navigate('/')
    } else {
      dispatch(getAdmissions())
    }
  }, [navigate, userInfo, dispatch])

  return (
    <Row className='d-flex justify-content-center'>
      <Col>
        <h2>
          User Admission Details in {month} {year}
        </h2>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Age</th>
              <th>Batch</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {admissions?.map((admission, index) => (
              <tr key={admission._id}>
                <td>{index + 1}</td>
                <td>{admission.email}</td>
                <td>{admission.age}</td>
                <td>{batches[admission.batch]}</td>
                <td
                  style={
                    admission.isPaid ? { color: 'green' } : { color: 'red' }
                  }
                >
                  {admission.isPaid ? 'Paid' : 'Not Paid'}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default AdmissionDetailScreen
