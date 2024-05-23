import React from 'react';
import './Modal.css';

const ModalForm = ( {setIsOpen, children} ) =>{
    const closeModalForm = (e) =>{
        if (e.target.classList.contains('overlay-form')) {
            setIsOpen(false)
        }
    }
   

    return(
        <div className='modal-form'>
            <div className='overlay-form' onClick={closeModalForm}></div>
            <div className='modal-content'>
            <button className='close-btn' onClick={() => setIsOpen(false)}>X</button>
            <div className='modal-body'>
                {children}
            </div>
            </div>

        </div>
    )
}
export default ModalForm