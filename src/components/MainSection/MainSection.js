import React from "react";
import "./MainSection.css";
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
    return(
      <section className="MainSection">
        <div className="Container">
          <div className="DivForH2">
            <h2 className="Header">ПОПУЛЯРНІ <span>НАПРЯМКИ</span></h2>
          </div>
          <div className="DivForSectionList">

            <a className="ref2" href="#">
              <div className="PopDestination">
                <div className="DivForLogo">
                  <img className="logo" id="LogoTurkue" src={LogoTurkue} alt=''/>
                </div>
                <div className="DivForPar">
                  <p className="ResortName">Туреччина</p>
                </div>
              </div>
            </a>
            
            <a className="ref2" href="#">
              <div className="PopDestination">
                <div className="DivForLogo">
                  <img className="logo" id="LogoEgypt" src={LogoEgypt} alt=''/>
                </div>
                <div className="DivForPar">
                  <p className="ResortName">Єгипет</p>
                </div>
              </div>
            </a>
            
            <a className="ref2" href="#">
              <div className="PopDestination">
                <div className="DivForLogo">
                  <img className="logo" id="LogoOAE" src={LogoOAE} alt=''/>
                </div>
                <div className="DivForPar">
                  <p className="ResortName">Домінікана</p>
                </div>
              </div>
            </a>
            
            <a className="ref2" href="#">
              <div className="PopDestination">
                <div className="DivForLogo">
                  <img className="logo" id="LogoDom" src={LogoDom} alt=''/>
                </div>
                <div className="DivForPar">
                  <p className="ResortName">ОАЕ</p>
                </div>
              </div>
            </a>

            <a className="ref2" href="#">
              <div className="PopDestination">
                <div className="DivForLogo ABC">
                  <img className="logo" id="LogoGreece" src={LogoGreece} alt=''/>
                </div>
                <div className="DivForPar">
                  <p className="ResortName">Греція</p>
                </div>
              </div>
            </a>
            
            <a className="ref2" href="#">
              <div className="PopDestination">
                <div className="DivForLogo">
                  <img className="logo" id="LogoMexico" src={LogoMexico} alt=''/>
                </div>
                <div className="DivForPar">
                  <p className="ResortName">Мексика</p>
                </div>
              </div>
            </a>
            
            <a className="ref2" href="#">
              <div className="PopDestination">
                <div className="DivForLogo">
                  <img className="logo" id="LogoMontenegro" src={LogoMontenegro} alt=''/>
                </div>
                <div className="DivForPar">
                  <p className="ResortName">Чорногорія</p>
                </div>
              </div>
            </a>
            
            <a className="ref2" href="#">
              <div className="PopDestination">
                <div className="DivForLogo">
                  <img className="logo" id="LogoItaly" src={LogoItaly} alt=''/>
                </div>
                <div className="DivForPar">
                  <p className="ResortName">Італія</p>
                </div>
              </div>
            </a>
            
            <a className="ref2" href="#">
              <div className="PopDestination">
                <div className="DivForLogo"><a href="#"></a>
                  <img className="logo" id="LogoCroatia" src={LogoCroatia} alt=''/>
                </div>
                <div className="DivForPar">
                  <p className="ResortName">Хорватія</p>
                </div>
              </div>
            </a>

          </div>
          <div className="divForInput">
            <input className="InputForMoreProp" type="button" value="показати ще"/>
          </div>
        </div>
      </section>
    )
}

export default MainSection;