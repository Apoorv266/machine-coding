import React, { useContext } from 'react'
import { habitContext } from '../Contexts/HabitContext'
import EachHabit from './EachHabit'
import { Link } from 'react-router-dom'
import "../Styles/EachHabit.css"

const Archives = () => {
  const {state} = useContext(habitContext)
  const archiveData = state.filter((item ) => item.isArchive)
  return (
    <>
    <Link to={"/"}><button className='nav-btn'>See Habits</button></Link>
    {archiveData.length > 0 ?<div className='habits-container'>
    {archiveData.map((item, index) =>  <EachHabit item={item} key={item.id} isArchive={true} index={index}/>)}
    </div> : <h2 style={{color: "white"}}>No archived habits !</h2>}
    </>
  )
}

export default Archives