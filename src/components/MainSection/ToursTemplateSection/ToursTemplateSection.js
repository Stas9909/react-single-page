import React from "react";
import "./ToursTemplateSection.js";
import {NavLink} from "react-router-dom";

const ToursTemplateSection = (props) => {

    return(
        <NavLink to={`tours/${props.route}`} className="ref2">
            {/* {props} */}
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