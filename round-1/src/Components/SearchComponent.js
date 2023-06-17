import React, { useContext } from 'react'
import RenderComponent from './RenderComponent'
import { bookContext } from './Contexts/BookContext'
import "../Styles/RenderComponent.css"
import { Link, useNavigate } from 'react-router-dom'

const SearchComponent = () => {
    const {filteredData, inputData, setinputData} = useContext(bookContext)
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate(-1)}>Return</button>
            <Link to={"/main"}><button>Access library</button></Link>
            <input type='text' placeholder='search books by author or title !' value={inputData} onChange={(e)=>setinputData(e.target.value)} id='inputfield'/>
            
                <RenderComponent data={filteredData} filterVal = {"All"}/>
        </div>
    )
}

export default SearchComponent