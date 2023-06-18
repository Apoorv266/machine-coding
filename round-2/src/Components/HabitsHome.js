import React, { useState } from 'react'
import Modal from './Modal'
import EachHabit from './EachHabit'
import "../Styles/EachHabit.css"

const HabitsHome = () => {
    const [dispModal, setdispModal] = useState(false)
    return (
        <>
            {dispModal && <Modal setdispModal={setdispModal}/>}
        <div className='habits-container'>
            <span onClick={()=>setdispModal(true)}>
            <EachHabit/>
            </span>
            <EachHabit />
            <EachHabit />
            <EachHabit />
            <EachHabit />
        </div>
        </>
    )
}

export default HabitsHome