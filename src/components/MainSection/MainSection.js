import React from "react";
import "./MainSection.css";
import ToursTemplateSection from "./ToursTemplateSection/ToursTemplateSection";
import {setCountriesActionCreator} from "../../Redux/MainSectionReducer";

const MainSection = (props) => {

  const toursTemplateElements = props.toursTemplate.map(tour => <ToursTemplateSection id={tour.id} pict={tour.pict} resort={tour.resort} route={tour.route}/>)
  console.log(toursTemplateElements);

  let addTemplate = () => {
    props.setCountriesActionCreator()
  } 

    return(
      <section className="MainSection">
        <img src="./Assets/shutterstock_114130168.jpg" alt="" />
        <div className="Container">
          <div className="DivForH2">
            <h2 className="Header">ПОПУЛЯРНІ <span>НАПРЯМКИ</span></h2>
          </div>
          <div className="DivForSectionList">
            {toursTemplateElements}    
          </div>
          <div className="divForInput">
            <input className="InputForMoreProp" type="button" value="показати ще"/>
          </div>
        </div>
      </section>
    )
}

export default MainSection;