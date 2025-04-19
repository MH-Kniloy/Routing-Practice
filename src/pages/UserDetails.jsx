import React from 'react'
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate()
  return (
    <div>
        <h2>{data.name}</h2>
        <h2>{data.email}</h2>
        <button className='btn' onClick={()=> navigate(-1)}>go back</button>
    </div>
  )
}

export default UserDetails