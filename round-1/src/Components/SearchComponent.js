import React, { useContext } from 'react'
import RenderComponent from './RenderComponent'
import { bookContext } from './Contexts/BookContext'
import "../Styles/RenderComponent.css"

const SearchComponent = () => {
    const {filteredData, inputData, setinputData} = useContext(bookContext)
    return (
        <div>
            <input type='text' placeholder='search books by author or title !' value={inputData} onChange={(e)=>setinputData(e.target.value)} id='inputfield'/>
            
                <RenderComponent data={filteredData} filterVal = {"All"}/>
        </div>
    )
}

export default SearchComponent