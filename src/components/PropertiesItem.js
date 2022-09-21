import React from "react";

function PropertiesItem({ image, name, price }) {
  return (
    <div className="propertiesItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> Php {price} </p>
    </div>
  );
}

export default PropertiesItem;