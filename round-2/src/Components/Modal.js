import React, { useContext } from 'react'
import "../Styles/Modal.css"
import { habitContext } from '../Contexts/HabitContext'

const Modal = ({ setdispModal }) => {
    const { inputState, inputDispatch, addHabitFunc , setselectedHabit} = useContext(habitContext)

    const closeformModal = () =>{
        setdispModal(false)
        setselectedHabit({})
        inputDispatch({type: "RESET"})
      }
    return (
        <>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeformModal}>X</span>
                    <p>New Habit !</p>
                    <div className='modal-inputs'>
                        <p>Habit title : </p>
                        <input type='text' value={inputState.habitName} onChange={(e) => inputDispatch({ type: "ADD_INPUT", payload: e.target.value })}  />
                        <div className='center-modal-inputs'>
                            <p>Repeat</p>


                            <select id='center-input' value={inputState.repeat} onChange={(e) => inputDispatch({ type: "ADD_REPEAT", payload: e.target.value })}>
                                <option value="Daily">Daily</option>
                                <option value="Alternate Days">Alternate Days</option>
                                <option value="Weekends">Weekends</option>
                            </select>

                            <p>Goal</p>
                            <select id='center-input' value={inputState.goal} onChange={(e) => inputDispatch({ type: "ADD_GOAL", payload: e.target.value })}>
                                <option value="1 Times a day">1 Times a day</option>
                                <option value="2 Times a day">2 Times a day</option>
                                <option value="3 days a week">3 days a week</option>
                            </select>
                        </div>

                        <div className='center-modal-inputs'>
                            <p>Time of day</p>
                            <select id='center-input' value={inputState.timesDay} onChange={(e) => inputDispatch({ type: "ADD_TIMESDAY", payload: e.target.value })}>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Evening">Evening</option>
                                <option value="Night">Night</option>
                            </select>


                            <p>Start date</p>
                            {/* <select id='center-input' value={inputState.date} onChange={(e) => inputDispatch({ type: "ADD_DATE", payload: e.target.value })}>
                                <option value="Today">Today</option>
                                <option value="Tomorrow">Tomorrow</option>
                                <option value="Next week">Next week</option>
                                <option value="Next Month">Next Month</option>
                            </select> */}
                            <input type="date" name="" id="date-input" value={inputState.date} onChange={(e) => inputDispatch({ type: "ADD_DATE", payload: e.target.value })}/>
                        </div>
                    </div>
                    <div className='modal-btns'>
                        <button onClick={addHabitFunc} className='save-btn'>Save</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Modal