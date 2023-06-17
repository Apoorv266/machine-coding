import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to={"/main"}><button>Access library</button></Link>
        <Link to={"/search"}><button>Search books</button></Link>
        <h1>This is home</h1>
    </div>
  )
}

export default Home