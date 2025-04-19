import React from 'react'
import { Link, useLoaderData } from 'react-router'

const Home = () => {
  const data = useLoaderData()
  const handleData = ()=>{

  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <Link to={`/userdetails/${item.id}`}>
              <button onClick={handleData} className="btn btn-primary">
                details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home