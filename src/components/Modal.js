import React, {useState} from 'react';
import ModalWindow from '../pages/Modalwindow';

function Modal() {
    const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <div>
        <h1>Hey, click on the button to open the modal.</h1>
        <button className="openModalBtn" onClick={()=>{setOpenModal(true)}}>Open</button>
        {openModal && <ModalWindow closeModal={setOpenModal}/>}
    </div>

    
    </>

  )
}

export default Modal
