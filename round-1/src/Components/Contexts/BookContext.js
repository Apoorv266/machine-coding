import React, { createContext, useState } from 'react'
import { BooksData } from '../Database'

export const bookContext = createContext()
const BookContextProvider = ({children}) => {
    const [booksDataArr, setbooksDataArr] = useState(BooksData)
    const categoryArray = BooksData.reduce((acc, curr) => acc.includes(curr.category) ? acc : [...acc, curr.category], [])
    const categoryFunc = (id, selectedCategory) =>{
        const newArr = booksDataArr.map((item) => item.id === id ? {...item, category : selectedCategory} : item) 
        setbooksDataArr(newArr)
    }
    const [inputData, setinputData] = useState("")

    const filteredData = inputData ? booksDataArr.filter((item) => item.bookName.toLowerCase().includes(inputData.toLowerCase()) || item.author.toLowerCase().includes(inputData.toLowerCase())) : booksDataArr
  return (
    <bookContext.Provider value={{categoryFunc, booksDataArr, categoryArray, setinputData, inputData, filteredData}}>
{children}
    </bookContext.Provider>
  )
}

export default BookContextProvider