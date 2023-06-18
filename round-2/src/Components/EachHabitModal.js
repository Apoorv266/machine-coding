import React, { useContext } from 'react'
import { habitContext } from '../Contexts/HabitContext'

const EachHabitModal = ({setdispDetailsModal}) => {
    const {selectedHabit} = useContext(habitContext)
  return (
    <>
     <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={()=>setdispDetailsModal(false)}>X</span>
                    <p><strong>Name :</strong>{selectedHabit.habitName}</p>
                    <p><strong>repeat :</strong>{selectedHabit.repeat}</p>
                    <p><strong>goal :</strong>{selectedHabit.goal}</p>
                    <p><strong>time of day :</strong>{selectedHabit.timesDay}</p>
                    <p><strong>date :</strong>{selectedHabit.date}</p>
                </div>

            </div>
    </>
  )
}

export default EachHabitModal