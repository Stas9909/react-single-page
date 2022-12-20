import React from "react";
// import "./ToursTemplateSection.js";
import "./ToursTemplateSection.css";
import {NavLink} from "react-router-dom";

const ToursTemplateSection = (props) => {
    console.log(props)

    return(
        <NavLink to={`/react-single-page/${props.route}`} className="ref2">
            <div className="PopDestination">
                <div className="DivForLogo">
                    <img className="logo" id={props.id} src={props.pict} alt=''/>
                </div>
                <div className="DivForPar">
                    <p className="ResortName">{props.resort}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default ToursTemplateSection;