import React from "react";
import "./CountriesSection.css";
import CountriesNav from "./CountriesNav/CountriesNav";
import { Outlet} from "react-router-dom";

const CountriesSection = () => {
    return(
        <div className="CountriesSection">
            <CountriesNav/>
            <div className="wrapForRoutes">
                <Outlet/>
            </div>
        </div>
    )
}

export default CountriesSection;
