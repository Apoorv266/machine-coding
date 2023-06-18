import React, { useContext } from 'react'
import "../Styles/EachHabit.css"
import { habitContext } from '../Contexts/HabitContext'

const EachHabit = ({ item ,isArchive, index}) => {
    const { deleteFunc, editHabitFunc ,ViewHabitsFunc,handleArchiveFunc,handleUnArchiveFunc} = useContext(habitContext)

    const colors = [
        "#ff6361",                   
        "#7a5195", 
        "#ef5675", 
        "#ffa600",
        "#ff7c43", 
        "#ffa41b", 
        "#bc5090", 
        "#3d9970",
        "#2a9d8f", 
        "#c77dff", 
        "#58508d", 
        "#58508d", 
        "#f95d6a", 
        "#ffa600",
        "#003f5c"
      ];
    return (
        <div className='eachHabit-main' key={item.id} style={{backgroundColor : colors[index]}}>
            <div className='habit-title'>
                <h1>{item.habitName}</h1>
            </div>
            {isArchive ? 
                <button onClick={()=>handleUnArchiveFunc(item.id)}id='btn' >Unarchive</button> : <div className='utility-btns'>
                <button onClick={()=>editHabitFunc(item)}id='btn'>Edit</button>
                <button onClickCapture={() => deleteFunc(item.id)}>Delete</button>
                <button onClick={()=>ViewHabitsFunc(item)}>View</button>
                <button onClick={()=>handleArchiveFunc(item.id)}>Archive</button>
            </div>}
        </div>
    )
}

export default EachHabit