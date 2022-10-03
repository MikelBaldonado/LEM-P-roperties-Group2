import React, { useCallback } from "react";
import { allProperties } from "../helpers/PropertiesList";
import PropertiesItem from "../components/PropertiesItem";
import "../styles/Properties.css";
import { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { Row } from "react-bootstrap";
import ToggleButton from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";


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

  <div className="container-fluid justify-content-center align-items-center pt-2" style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <br />
    <br />
    <br />
    <div className="row px-2 pb-2 mx-2 d-flex flex-row flex-wrap text-center">
      {/* <div className="d-flex col-sm-2 bg-light text-center pt-2" style={{borderRadius: "5px"}}> */}
      <div>
        <h3>Select Region</h3>
        Luzon<input type="checkbox" /> 
        Visayas<input type="checkbox" /> 
        Mindanao<input type="checkbox" /> 
      </div>
      <div>
        <h3>Area</h3>
        <select name="Negros Oriental" id="" title="Negros Oriental">
          
            <option value="Dumaguete" style={{textColor:"blue"}}>Dumaguete</option>
            <option value="Sibulan">Sibulan</option>
            <option value="Dauin">Dauin</option>

        </select>
        <select name="Negros Occidental" id="">

         <option>Sagay</option>
          <option>Valladolid</option>

        </select>
      </div>
      <br /><br />
      <br /><br />
        <div id="filterButton" className="">
          <button className="btn bg-primary filterButtonTop" onClick={handleBtns} type="button" value="All">All</button>
          <button className="btn bg-primary filterButtonTop" onClick={handleBtns} type="button" value="Luzon">Luzon</button>
          <button className="btn bg-primary filterButtonTop" onClick={handleBtns} type="button" value="Visayas">Visayas</button>
          <button className="btn bg-primary filterButtonTop" onClick={handleBtns} type="button" value="Mindanao">Mindanao</button>
          <DropdownButton className="btn bg-primary filterButtonTop" type="DropdownButton" title="ssssssMetro Manila" >Metro Manila</DropdownButton>
          <Button className="btn filterButtonTop" >
          <DropdownButton id="dropdown-basic-button" onClick={handleBtns} value="All" title="Cities/Provinces">
            <button className=" bg-primary filterButtonTop" onClick={handleBtns} type="button" value="Mindanao">Mindanao</button> <br/>
            <button className=" bg-primary filterButtonTop" onClick={handleBtns} type="button" value="Mindanao">Mindanao</button><br/>
            <button className=" bg-primary filterButtonTop" onClick={handleBtns} type="button" value="Mindanao">Mindanao</button>
            <Dropdown.Item eventKey="Metro Manila">Metro Manila</Dropdown.Item>
            <Dropdown.Item eventKey="Luzon">Luzon</Dropdown.Item>
            <Dropdown.Item eventKey="Mindanao">Mindanao</Dropdown.Item>
          </DropdownButton>
          </Button>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" as="button" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>

          </ul>
        </div>


      <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
      <Button as="input" type="button" value="Input" />{' ddd'}
      <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />



          </div>
        </div>     
      {/* </div> */}
      <br />
      <br />

      <div className="row ad-flex aflex-row aflex-wrap atext-center bg-primary">
      {/* <div className="container col-md-12 justify-content-center columnProperty"> */}
        {/* <div className="properties"> */}
          {/* <h1 className="propertiesTitle">Our Properties</h1> */}
          <div className="propertiesList bg-secondary  text-center" >
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
        {/* </div> */}
      {/* </div> */}
    </div>
  </div> 

  
  );
}
export default Properties;