import React, { useContext } from 'react'
import RenderComponent from './RenderComponent'
import { bookContext } from './Contexts/BookContext'

const Category = () => {
  const {booksDataArr} = useContext(bookContext)
  return (
    <div>
      <h2>Currently Reading</h2>
      <RenderComponent data={booksDataArr} filterVal = {"Currently Reading"}/>
      <h2>Read</h2>
      <RenderComponent data={booksDataArr} filterVal = {"read"}/>
      <h2>Want to read</h2>
      <RenderComponent data={booksDataArr} filterVal = {"Want to read"}/>
    </div>
  )
}

export default Category