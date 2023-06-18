import React from 'react'
import "../Styles/Modal.css"

const Modal = ({setdispModal}) => {
    return (
        <>
            <h1>test</h1>
            <div id="myModal" className="modal">


                <div className="modal-content">
                    <span className="close" onClick={()=>setdispModal(false)}>X</span>
                    <p>New Habit !</p>
                    <div className='modal-inputs'>
                        <p>NAME : </p>
                        <input type='text' />
                        <div className='center-modal-inputs'>
                            <p>Repeat : </p>
                            <input type='text' id='center-input' />
                            <p>Goal :</p>
                            <input type='text' id='center-input' />
                        </div>

                        <div className='center-modal-inputs'>
                            <p>Time of day :</p>
                            <input type='text' id='center-input' />
                            <p>Start date :</p>
                            <input type='text' id='center-input' />
                        </div>
                    </div>
                    <div className='modal-btns'>
                        <button >Discard</button>
                        <button>Save</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Modal