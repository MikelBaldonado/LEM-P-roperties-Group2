import React from "react";
import { PropertiesList } from "../helpers/PropertiesList";
import PropertiesItem from "../components/PropertiesItem";
import "../styles/Properties.css";

function Properties() {
  return (

    <div className="properties">
      <h1 className="propertiesTitle">Our Properties</h1>
      <div className="propertiesList">
        {PropertiesList.map((propertiesItem, key) => {
          return ( 
          <PropertiesItem 
            key={key}
            image={propertiesItem.image} 
            name={propertiesItem.name} 
            price={propertiesItem.price}/>
          );
        })}
      </div>
    </div>
  );
}

export default Properties;