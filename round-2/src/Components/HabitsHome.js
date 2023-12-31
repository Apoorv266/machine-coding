import React, { useContext, useState } from 'react'
import Modal from './Modal'
import EachHabit from './EachHabit'
import "../Styles/EachHabit.css"
import { habitContext } from '../Contexts/HabitContext'
import EachHabitModal from './EachHabitModal'
import { Link } from 'react-router-dom'

const HabitsHome = () => {

    const { state, dispModal, setdispModal, dispDetailsModal, setdispDetailsModal } = useContext(habitContext)

    const nonarchiveData = state.filter((item) => !item.isArchive)
    return (
        <>
            <Link to={"/archives"}><button className='nav-btn'>See Archives</button></Link>
            {dispModal && <Modal setdispModal={setdispModal} />}
            {dispDetailsModal && <EachHabitModal setdispDetailsModal={setdispDetailsModal} />}
            <div className='habits-container' style={{ display: dispModal || dispDetailsModal ? "none" : "grid" }}>
                <span onClick={() => setdispModal(true)} style={{ cursor: "pointer" }}>
                    <div className='eachHabit-main' style={{height: "120px"}}>
                        <div className='habit-title'>
                            <h1>Enter your own habits !</h1>
                        </div>
                    </div>
                </span>
                {nonarchiveData.map((item, index) => <EachHabit item={item} key={item.id} index={
                    index} />)}
            </div>
        </>
    )
}

export default HabitsHome