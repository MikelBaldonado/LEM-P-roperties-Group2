// import React from "react";
// import Modal from '../components/Modal.js';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PropertiesItem({ image, name, price, region, city, floorarea, lotarea, description, }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='d-flex flex-wrap justify-content-center'>
      <div className="propertiesItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <div className='card-body'>
        <h3 style={{textAlign:"center"}}> {name} </h3>
        <p> Php {price} </p>
        <p> Region: {region} </p>
        <p> City: {city} </p>
        </div>
        <div className="card-footer">
        <Button variant="light" onClick={handleShow}>
          <b>DETAILS</b>
        </Button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image} alt="" style={{width:"350px", height:"350px"}}/>
            <h4> Php {price} </h4>
            <p> Region: {region} </p>
            <p> City: {city} </p>
            <p> Floor Area: {floorarea} </p>
            <p> Lot Area: {lotarea} </p>
            <p> Description: {description} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

    </div>


  );
}

export default PropertiesItem;