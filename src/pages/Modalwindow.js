import React from 'react';
import '../styles/Modal.css';
import '../helpers/PropertiesList.js';


function ModalWindow({closeModal}) {

  return (
    <>
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}>X</button>

            </div>
            <div className="title">
                <h1>Property Description</h1>
            </div>
            <div className="body">
                {/* <p>The next page is awesome! You should move forward, you will enjoy it.</p> */}
                <dl>
                    <dt>(Property name:)</dt>
                        <dd>
                            MAKATI CONDOMINIUM
                        </dd>
                    <dt>Floor Area:</dt>
                        <dd>
                            300 sqm.
                        </dd>
                    <dt>Price:</dt>
                        <dd>
                            Php 30,000,000.00
                        </dd>
                    <dt>Region:</dt>
                        <dd>
                            Luzon
                        </dd>
                    <dt>City:</dt>
                        <dd>
                            Metro Manila
                        </dd>
                    <dt>Description:</dt>
                        <dd>
                            Located in the heart of Makati, this condo is fully furnished and ready for occupancy.
                            <br/><br/>
                            

                        </dd>
                </dl>
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

export default ModalWindow;
