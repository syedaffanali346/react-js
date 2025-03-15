import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams();
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      User: {userid ? userid : "type something in url user/1234"}
    </div>
  )
}

export default User
