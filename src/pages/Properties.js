import React, { useState } from "react";
import { PropertiesList } from "../helpers/PropertiesList";
import PropertiesItem from "../components/PropertiesItem";
import "../styles/Properties.css";

function Properties() {

  const filterSelection = (selected) => {
    if (selected == "metroManila"){
      return "Metro Manila";
    }
  }
  return (

  <div className="container-fluid justify-content-center align-items-center pt-5" style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <div className="row px-2 pb-2 mx-2 d-flex flex-row flex-wrap">
      <div className="col-sm-2 bg-light text-center pt-2" style={{borderRadius: "5px"}}>
        <div id="filterButton" className="filterButtonsVertical">
          <a className="btn active" onclick="filterSelection('all');">All</a>
          <a className="btn" onClick="filterSelection('metroManila');" >Metro Manila</a>
          <a className="btn" onClick="filterSelection('luzon');">Luzon</a>
          <a className="btn" onClick="filterSelection('visayas');">Visayas</a>
          <a className="btn" onClick="filterSelection('mindanao');">Mindanao</a>
        </div>
      </div>
      <div className="col-sm-10 justify-content-center columnProperty">
        <div className="properties">
          <h1 className="propertiesTitle">Our Properties</h1>
          <div className="propertiesList">
            {PropertiesList.filter(locality=> locality.city =={filterSelection}).map((propertiesItem, key) => {
            // {PropertiesList.map((propertiesItem, key) => {
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


// filterSelection("all")
// function filterSelection(c) {
// let x, i;
// x = document.getElementsByClassName("propertyDiv");
// if (c == "all") c = "";
// // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
// for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
// }

// }

// // Show filtered elements
// function w3AddClass(element, name) {
// let i, arr1, arr2;
// arr1 = element.className.split(" ");
// arr2 = name.split(" ");
// for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//     element.className += " " + arr2[i];
//     }
// }
// }

// // Hide elements that are not selected
// function w3RemoveClass(element, name) {
// let i, arr1, arr2;
// arr1 = element.className.split(" ");
// arr2 = name.split(" ");
// for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//     arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
// }
// element.className = arr1.join(" ");
// }
// // Add active class to the current control button (highlight it)
// let btnContainer = document.getElementById("filterButton");
// let btns = btnContainer.getElementsByClassName("btn");
// // alert(btns.length);
// for (let i = 0; i < btns.length; i++) {
// btns[i].addEventListener("click", function() {
//     let current = document.getElementsByClassName("active");
//     // current[1].className = current[1].className.replace("active", "");
//     current[1].classList=current[1].classList.remove("active");
//     // current[0].className += "active";
//     // this.className += "active";
//       this.classList.add("active");
    
// });

// }

export default Properties;