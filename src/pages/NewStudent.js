import React, { useState } from 'react'
import { Container } from 'reactstrap'
import CreateForm from '../components/CreateForm'
import { useHistory } from 'react-router-dom'

const NewStudent = props => {
  const [ form, setForm ] = useState({})
  const history = useHistory()

  const handleChange = e => {
    setForm({
      form: { ...form.form, [e.target.name]: e.target.value },
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(form)
    history.push({
      pathname: '/students',
      state: { form }
    })
  }

  return (
    <Container>
      <h1>Student Registration</h1>
      <CreateForm onSubmit={onSubmit} handleChange={handleChange} />
    </Container>
  )
}


export default NewStudent;