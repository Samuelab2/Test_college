import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import StudentsTable from '../components/StudentsTable'

const ListStudents = () => {
  return (
  <div className='min-vh-100 bg-light'>
    <Container>
      <Row>
        <Col md={9}>
          <h1>List students</h1>
        </Col>
        <Col md={3}>
          <Link to='/students/new' className='btn btn-primary'>
            Add student
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <StudentsTable />
        </Col>
      </Row>
    </Container>
  </div>
)}

export default ListStudents;