import React, { useContext } from 'react'
import { habitContext } from '../Contexts/HabitContext'
import EachHabit from './EachHabit'
import { Link } from 'react-router-dom'

const Archives = () => {
  const {state} = useContext(habitContext)
  const archiveData = state.filter((item ) => item.isArchive)
  return (
    <>
    <Link to={"/"}><button>See all habits</button></Link>
    {archiveData.map((item) =>  <EachHabit item={item} key={item.id} isArchive={true}/>)}
    </>
  )
}

export default Archives