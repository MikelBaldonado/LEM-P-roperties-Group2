import React, {useEffect, useState } from "react";
import { PropertiesList } from "../helpers/PropertiesList";
import PropertiesItem from "../components/PropertiesItem";
import "../styles/Properties.css";
// import { useEffect, useState } from "react";

function Properties() {

  // const filterSelection = (selected) => {
  //   if (selected === "metroManila"){
  //     return "Metro Manila";
  //   }
  // }
  // const [propertyItems, setPropertyItems] = useState(PropertiesItem);
  const [propertyItems, setPropertyItems] = useState(PropertiesList);
  const [currentPropertyItem, setCurrentPropertyItem] = useState("All");

  const handleBtns = (e) => {
    let propertyElement = e.target.value;
    setCurrentPropertyItem(propertyElement);
    alert(propertyElement);
  };

  useEffect(() => {
    if (currentPropertyItem ==="All") {
      // setPropertyItems(PropertiesItem);
      setPropertyItems(PropertiesList);
    }else {
      const filtered = PropertiesList.filter((PropertyItem) => {
        return (
          PropertyItem.locality === currentPropertyItem || PropertyItem.locality.includes(currentPropertyItem)
        );
      });
      setPropertyItems(filtered);
    }
    
  }, [currentPropertyItem]);

  return (

  <div className="container-fluid justify-content-center align-items-center pt-5" style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <div className="row px-2 pb-2 mx-2 d-flex flex-row flex-wrap">
      <div className="col-sm-2 bg-light text-center pt-2" style={{borderRadius: "5px"}}>
        <div id="filterButton" className="filterButtonsVertical">
          <a className="btn active" onclick={handleBtns} type="button" value="All">All</a>
          <a className="btn" onClick={handleBtns} type="button" value="Metro Manila" >Metro Manila</a>
          <a className="btn" onClick={handleBtns} type="button" value="Luzon">Luzon</a>
          <a className="btn" onClick={handleBtns} type="button" value="Visayas">Visayas</a>
          <a className="btn" onClick={handleBtns} type="button" value="Mindanao">Mindanao</a>
        </div>
      </div>
      <div className="col-sm-10 justify-content-center columnProperty">
        <div className="properties">
          <h1 className="propertiesTitle">Our Properties</h1>
          <div className="propertiesList">
            {/* {propertyItems.map((PropertyItem, key) => { */}
            {/* {PropertiesList.filter(locality=> locality.city ==={propertyItems}).map((propertiesItem, key) => { */}
            
            {/* // return(
            // <div key={key}>
            // <div key={PropertyItem.id}>
            //   {PropertyItem.image}
            //   {PropertyItem.name}
            //   {PropertyItem.price}
            //   {PropertyItem.region}
            //   {PropertyItem.city}
            //   {PropertyItem.locality}
            //   {PropertyItem.floorarea}
            //   {PropertyItem.lotarea}
            //   {PropertyItem.locality}
            //   {PropertyItem.description}
            //   </div>
            //    ); */}
            
            {PropertiesList.map((Item, key) => {
              return (
              <PropertiesItem
                key={key.id}
                image={Item.image}
                name={Item.name} 
                price={Number(Item.price).toLocaleString('en-US')}
                region={Item.region}
                city={Item.city}
                locality={Item.locality}
                floorarea={Item.floorarea}
                lotarea={Item.lotarea}
                description={Item.description}
                // image={Item.image}
                // name={Item.name} 
                // price={Number(Item.price).toLocaleString('en-US')}
                // region={Item.region}
                // city={Item.city}
                // locality={Item.locality}
                // floorarea={Item.floorarea}
                // lotarea={Item.lotarea}
                // description={Item.description}
              />
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