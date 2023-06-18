import React, { useContext } from 'react'
import "../Styles/EachHabit.css"
import { habitContext } from '../Contexts/HabitContext'

const EachHabit = ({ item ,isArchive}) => {
    const { deleteFunc, editHabitFunc ,ViewHabitsFunc,handleArchiveFunc} = useContext(habitContext)
    return (
        <div className='eachHabit-main' key={item.id}>
            <div className='habit-title'>
                <h1>{item.habitName}</h1>
            </div>
            {isArchive ? "" : <div className='utility-btns'>
                <button onClick={()=>editHabitFunc(item)}>Edit</button>
                <button onClickCapture={() => deleteFunc(item.id)}>Delete</button>
                <button onClick={()=>ViewHabitsFunc(item)}>View</button>
                <button onClick={()=>handleArchiveFunc(item.id)}>Archive</button>
            </div>}
        </div>
    )
}

export default EachHabit