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
            price={Number(propertiesItem.price).toLocaleString('en-US')}
            region={propertiesItem.region}
            city={propertiesItem.city}
            floorarea={propertiesItem.floorarea}
            lotarea={propertiesItem.lotarea}
            description={propertiesItem.description}/>
          );
        })}
      </div>
    </div>
  );
}

export default Properties;