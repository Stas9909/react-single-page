import React from "react";
import "./CountriesNav.css";
import {NavLink} from "react-router-dom";
import { useState } from 'react';

const CountriesNav = () => {

    const [showCountriesList, setShowList] = useState(false);
    function DeployCountriesList () {
        setShowList(!showCountriesList)
    }

    const [showCategoriesList, setShowCategoriesList] = useState(false);
    function DeployCategoriesList () {
        setShowCategoriesList(!showCategoriesList)
    }   

    return(
        <div className="CountriesNav">
            <div className="CountriesNavWrap">
                <div className="DivForHotelSerching">
                    <input className="InputForHotelSearching" type="text" placeholder="Знайти готель"/>
                </div>
                <div className="DivForCountriesSelect">
                    <div className="DivForCountriesList">
                        <p className="ParForCountryTxt" onClick={DeployCountriesList}>Країна</p>
                        <div className={showCountriesList ? "showSelectedList" : "hideSelectedList"}>
                            <div className="TurkeyHotels">
                                <input type="checkbox" name="chooseMe" className="chooseMe" id="chooseTurkey"/>
                                <NavLink to="/countries/turkey" className="LinkForCountry">Туреччина</NavLink>
                            </div>  

                            <div className="EgyptHotels">
                                <input type="checkbox" name="chooseMe" className="chooseMe" id="chooseEgypt"/>
                                <NavLink to="/countries/egypt" className="LinkForCountry">Єгипет</NavLink>
                            </div>    

                            <div className="OAEHotels">
                                <input type="checkbox" name="chooseMe" className="chooseMe" id="chooseOAE"/>
                                <NavLink to="/countries/OAE" className="LinkForCountry">ОАЕ</NavLink>
                            </div>                 
                        </div>
                    </div>

                    <div className="DivForCategoriesList">
                        <p className="ParForCategoryTxt" onClick={DeployCategoriesList} style={{showCategoriesList: "true" ? "ParForCategoryTxtSelected" : "ParForCategoryTxt"}}>Категорія</p>
                        <div className={showCategoriesList ? 'showSelectedList' : "hideSelectedList"}>
                            <div className="OneStarHtls">
                                <input type="checkbox" name="chooseMe" className="chooseMe" id="chooseOneStar"/>
                                <NavLink to="#" className="LinkForCategory">1*</NavLink>
                            </div> 
                            <div className="TwoStarHtls">
                                <input type="checkbox" name="chooseMe" className="chooseMe" id="chooseTwoStar"/>
                                <NavLink to="#" className="LinkForCategory">2*</NavLink>
                            </div> 
                            <div className="ThreeStarHtls">
                                <input type="checkbox" name="chooseMe" className="chooseMe" id="chooseThreeStar"/>
                                <NavLink to="#" className="LinkForCategory">3*</NavLink>
                            </div> 
                            <div className="FourStarHtls">
                                <input type="checkbox" name="chooseMe" className="chooseMe" id="chooseFourStar"/>
                                <NavLink to="#" className="LinkForCategory">4*</NavLink>
                            </div> 
                            <div className="FiveStarHtls">
                                <input type="checkbox" name="chooseMe" className="chooseMe" id="chooseFiveStar"/>
                                <NavLink to="#" className="LinkForCategory">5*</NavLink>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountriesNav;



