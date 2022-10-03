import React, { useCallback } from "react";
import { allProperties } from "../helpers/PropertiesList";
import PropertiesItem from "../components/PropertiesItem";
import "../styles/Properties.css";
import { useState, useEffect } from "react";


function Properties() {

  const [cards, setCards] = useState(allProperties);
  const [currentCard, setCurrentCard] = useState("All");

  const handleBtns = (e) => {
    let btnValue = e.target.value;
    setCurrentCard(btnValue);
    // alert(btnValue);
  };

  useEffect(() => {
    if (currentCard === "All") {
      // setPropertyItems(PropertiesItem);
      setCards(allProperties);
    }else {
      const filtered = allProperties.filter((property) => {
        return (
          property.locality === currentCard || property.locality.includes(currentCard)
        );
      });
      setCards(filtered);
    }
    
  }, [currentCard]);
// };
  return (

  <div className="container-fluid justify-content-center align-items-center pt-5" style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <div className="row px-2 pb-2 mx-2 d-flex flex-row flex-wrap">
      <div className="d-flex col-sm-2 bg-light text-center pt-2" style={{borderRadius: "5px"}}>
        <div id="filterButton" className="ffilterButtonsVertical">
          <button className="filterButtonsVertical active" onClick={handleBtns} type="button" value="All">All</button>
          <button className="filterButtonsVertical" onClick={handleBtns} type="button" value="Metro Manila" >Metro Manila</button>
          <button className="filterButtonsVertical" onClick={handleBtns} type="button" value="Luzon">Luzon</button>
          <button className="filterButtonsVertical" onClick={handleBtns} type="button" value="Visayas">Visayas</button>
          <button className="filterButtonsVertical" onClick={handleBtns} type="button" value="Mindanao">Mindanao</button>
        </div>
      </div>
      <div className="col-sm-10 justify-content-center columnProperty">
        <div className="properties">
          <h1 className="propertiesTitle">Our Properties</h1>
          <div className="propertiesList">
          {/*   //displays the Properties as card without applying the filter.         
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
               />
              );
            })} */}
            {/* display filtered property items as card using the formatted layout in PropertiesItem component. */}
            {cards.map((PropertyItem, key) => (   
                <PropertiesItem
                  key={key.id}
                  image={PropertyItem.image}
                  name={PropertyItem.name} 
                  price={Number(PropertyItem.price).toLocaleString('en-US')}
                  region={PropertyItem.region}
                  city={PropertyItem.city}
                  locality={PropertyItem.locality}
                  floorarea={PropertyItem.floorarea}
                  lotarea={PropertyItem.lotarea}
                  description={PropertyItem.description}
                 />
                // );
            ))}

          </div>
        </div>
      </div>
    </div>
  </div> 

  
  );
}
export default Properties;