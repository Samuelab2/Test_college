import React from 'react'
import { Table } from 'reactstrap'
import { studentsDB } from '../db'

const StudentsTable = () => {
  return (
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
          studentsDB.length === 0 
          ? <tr>
              <th>Nothing here...</th>
            </tr>
          : studentsDB.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1 }</th>
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
)}

export default StudentsTable;