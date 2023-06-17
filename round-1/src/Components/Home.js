import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to={"/category"}><button>Access library</button></Link>
        <Link to={"/search"}><button>Search books</button></Link>
    </div>
  )
}

export default Home