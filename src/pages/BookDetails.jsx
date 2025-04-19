import React from 'react'
import { useLoaderData, useParams } from 'react-router'

const BookDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const numid = parseInt(id)
    console.log(data);
    const singleBook = data.find(book=>book.bookId===numid)
    console.log(singleBook);
    
  return (
    <div>
        <h2>{singleBook.bookName}</h2>
        <img src={singleBook.image} alt="" />
    </div>
  )
}

export default BookDetails