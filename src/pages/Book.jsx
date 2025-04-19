import React from 'react'
import { Link, useLoaderData } from 'react-router'

const Book = () => {
    const data = useLoaderData()
    console.log(data);
  return (
    <div>
        {
            data.map(item=><div key={item.bookId}>
                <h2>{item.bookName}</h2>
                <Link to={`/book/${item.bookId}`}>
                <button className="btn">details</button>
                </Link>
            </div>)
        }
    </div>
  )
}

export default Book