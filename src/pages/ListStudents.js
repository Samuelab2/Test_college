import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import StudentsTable from '../components/StudentsTable'

const ListStudents = () => {
  return (
  <Container>
    <Row>
      <Col md={6}>
        <h1>List students</h1>
      </Col>
      <Col md={6}>
        <Link to='/students/new' className='btn btn-primary'>
          Add student
        </Link>
      </Col>
    </Row>
    <StudentsTable />
  </Container>
)}

export default ListStudents;