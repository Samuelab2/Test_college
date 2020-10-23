import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 bg-light'>
      <div className="container">
        <div className='row'>
          <div className="col-sm-12 col-md-6 my-sm-5 my-3 d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center">Test College</h2>
            <p className="text-center">A simple student registration form to rule them all</p>
            <Link to='/students' className='btn btn-primary'>
              Go ahead!
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 my-sm-5 my-3 d-flex justify-content-center align-items-center">
            <img className="img-fluid rounded" src="https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Main" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home