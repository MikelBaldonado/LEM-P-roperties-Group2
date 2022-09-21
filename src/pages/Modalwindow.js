import React from 'react';
import '../styles/Modal.css';

function ModalWindow({closeModal}) {

  return (
    <>
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}>X</button>

            </div>
            <div className="title">
                <h1>Are you sure do you want to continue?</h1>
            </div>
            <div className="body">
                <p>The next page is awesome! You should move forward, you will enjoy it.</p>
            </div>
            <div className="footer">
                <button onClick={() => closeModal(false)}  id="cancelBtn">Cancel</button>
                <button>Continue</button>
            </div>
        </div>
    </div>
    </>
    )
}

export default ModalWindow
