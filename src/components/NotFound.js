import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light'>
      <h1>Ups... This page does not exist <span role='img' aria-label='emoji triste'>😣</span></h1>
      <Link to='/students' className='btn btn-primary'>
        Go back!
      </Link>
    </div>
  )
}

export default NotFound