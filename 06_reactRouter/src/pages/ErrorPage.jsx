import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
  return (
    <div className='text-center'>
      <h1 className='text-3xl'>error page</h1>
      <p className='text-2xl'>{error?.message || "Something went wrong."}</p>
      <p className='text-2xl'>{error?.status || "Unknown Status"}</p>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default ErrorPage
