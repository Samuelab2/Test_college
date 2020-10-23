import React from 'react'
import { Container, Table, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { studentsDB } from '../db'

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
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Email </th>
          <th>Phone</th>
          <th>Address</th>
          <th>Major</th>
          <th>Semester of Anticipaped Enrollment</th>
        </tr>
      </thead>
      <tbody>
        {
          studentsDB.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.first_name}, {item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}, {item.address2}, {item.city}, {item.zip}</td>
                <td>{item.intended_major}</td>
                <td>{item.semester_enrollment}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  </Container>
)}

export default ListStudents;