import React from "react";
import { PropertiesList } from "../helpers/PropertiesList";
import PropertiesItem from "../components/PropertiesItem";
// import "../public/index.html";
import "../styles/Properties.css";

function Properties() {
  return (

  <div className="container-fluid justify-content-center align-items-center pt-5" style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <div className="row px-2 pb-2 pt-2 mt-2 mx-2 d-flex flex-row flex-wrap">
      <div className="col-sm-2 bg-light text-center pt-2 border-radius-5" style={{borderRadius: "5px"}}>
        <div id="filterButton" className="filterButtonsVertical">
          <a className="btn active" onclick="filterSelection('all');">All</a>
          <a className="btn" onclick="filterSelection('metroManila');">Metro Manila</a>
          <a className="btn" onclick="filterSelection('luzon');">Luzon</a>
          <a className="btn" onclick="filterSelection('visayas');">Visayas</a>
          <a className="btn" onclick="filterSelection('mindanao');">Mindanao</a>
        </div>
      </div>
      <div className="col-sm-10 pt-2 justify-content-center columnProperty">
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
      </div>
    </div>
  </div>  
  );
}

export default Properties;