import React from "react";
import "./CountriesSection.css";
import CountriesNav from "./CountriesNav/CountriesNav";
import {Route, Routes} from "react-router-dom";
import TurkeyHotelsSection from "./TurkeyHotelsSection/TurkeyHotelsSection";
import EgyptHotelsSection from "./EgyptHotelsSection/EgyptHotelsSection";
import OAEHotelsSection from "./OAEHotelsSection/OAEHotelsSection";



const CountriesSection = () => {
    return(
        <div className="CountriesSection">
            <CountriesNav/>
            <div className="wrapForRoutes">
            <Routes>
                <Route path="/turkey" element={<TurkeyHotelsSection/>}/>
                <Route path="/egypt" element={<EgyptHotelsSection/>}/>
                <Route path="/OAE" element={<OAEHotelsSection/>}/>
            </Routes>
            </div>
        </div>
    )
}

export default CountriesSection;
