import React, { useEffect, useState } from "react";
import "./MainSection.css";
import ToursTemplateSection from "./ToursTemplateSection/ToursTemplateSection";
import { useSelector, useDispatch } from 'react-redux';
import setCountriesActionCreator from "../../Redux/countries/MainSectionActionCreator";

const MainSection = () => {

  let [currentVisibleItems, setCurrentVisibleItems] = useState(9);
  const addMoreItems = () => {
    setCurrentVisibleItems(currentVisibleItems + 3)
  }

  const dispatch = useDispatch()
  const toursTemplate = useSelector(state => state.mainSectionVar)

  useEffect(() => {
    dispatch(setCountriesActionCreator())
  }, [])

  if (!toursTemplate) return null;

  const toursTemplateElements = toursTemplate.slice(0, currentVisibleItems).map(tour => <ToursTemplateSection key={tour.id} id={tour.id} pict={tour.pict} resort={tour.resort} route={tour.route} />)

  return (
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
          <input className={currentVisibleItems >= toursTemplate.length ? "hideBtn" : "InputForMoreProp"} onClick={addMoreItems} type="button" value="показати ще" />
        </div>
      </div>
    </section>
  )
}

export default MainSection;