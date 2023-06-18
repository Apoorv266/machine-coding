import React, { useContext } from 'react'
import { habitContext } from '../Contexts/HabitContext'

const EachHabitModal = ({setdispDetailsModal}) => {
    const {selectedHabit, setselectedHabit} = useContext(habitContext)

    const closeViewModal = () =>{
      setdispDetailsModal(false)
      setselectedHabit({})
    }
  return (
    <>
     <div id="myModal" className="modal">
                <div className="habitDetail">
                    <span className="close" onClick={closeViewModal}>X</span>
                    <p><strong>Habit Name : </strong>{selectedHabit.habitName}</p>
                    <p><strong>Repeat : </strong>{selectedHabit.repeat}</p>
                    <p><strong>Goal : </strong>{selectedHabit.goal}</p>
                    <p><strong>Time of day : </strong>{selectedHabit.timesDay}</p>
                    <p><strong>Date : </strong>{selectedHabit.date}</p>
                </div>

            </div>
    </>
  )
}

export default EachHabitModal