import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    //  const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/syedaffanali346')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubApi = async () => {
    const res = await fetch("https://api.github.com/users/syedaffanali346")
    return res.json()
}