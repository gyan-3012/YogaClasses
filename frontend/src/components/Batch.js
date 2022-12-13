import React from 'react'
import { Table, Row, Col } from 'react-bootstrap'

const Batch = () => {
  const batchInfo = [
    { _id: 1, batch: 'M-1', timing: '6-7 AM' },
    { _id: 2, batch: 'M-2', timing: '7-8 AM' },
    { _id: 3, batch: 'M-3', timing: '8-9 AM' },
    { _id: 4, batch: 'E-1', timing: '5-6 PM' },
  ]

  return (
    <Row className='d-flex justify-content-center'>
      <Col>
        <h2>Welcome to Yoga Classes</h2>
        <p>
          We have 4 batches for the yoga classes that are mentioned in the below
          table
        </p>
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Batch</th>
              <th>Timing</th>
            </tr>
          </thead>
          <tbody>
            {batchInfo.map((batch) => (
              <tr key={batch._id}>
                <td>{batch._id}</td>
                <td>{batch.batch}</td>
                <td>{batch.timing}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default Batch
