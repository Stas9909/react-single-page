import React from "react";
import "./MainSection.css";
import ToursTemplateSection from "./ToursTemplateSection/ToursTemplateSection";
import LogoTurkue from "../../Assets/Курорт-Олюдениз.jpg";
import LogoEgypt from "../../Assets/shutterstock_114130168.jpg";
import LogoOAE from "../../Assets/Dubaj.jpg";
import LogoDom from "../../Assets/Dominicana.jpg";
import LogoGreece from "../../Assets/Greece.jpg";
import LogoMexico from "../../Assets/mexico-cancun-big2.jpg";
import LogoMontenegro from "../../Assets/chernogoriya-v-maye.jpg";
import LogoItaly from "../../Assets/kuda-poehat-v-italy.jpg";
import LogoCroatia from "../../Assets/Croatiajpg.jpg";

const MainSection = () => {

  const toursTemplate = [
    {id: "LogoTurkue", pict: LogoTurkue, resort: "Туреччина"},
    {id: "LogoEgypt", pict: LogoEgypt, resort: "Єгипет"},
    {id: "LogoOAE", pict: LogoOAE, resort: "ОАЕ"},
    {id: "LogoDom", pict: LogoDom, resort: "Домінікана"},
    {id: "LogoGreece", pict: LogoGreece, resort: "Греція"},
    {id: "LogoMexico", pict: LogoMexico, resort: "Мексика"},
    {id: "LogoMontenegro", pict: LogoMontenegro, resort: "Чорногорія"},
    {id: "LogoItaly", pict: LogoItaly, resort: "Італія"},
    {id: "LogoCroatia", pict: LogoCroatia, resort: "Хорватія"},
  ]

  const toursTemplateElements = toursTemplate.map(tour => <ToursTemplateSection id={tour.id} pict={tour.pict} resort={tour.resort}/>)

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