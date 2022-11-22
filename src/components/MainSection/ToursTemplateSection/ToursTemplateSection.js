import React from "react";
import "./ToursTemplateSection.js";

const ToursTemplateSection = (props) => {

    return(
        <a className="ref2" href="#">
            <div className="PopDestination">
                <div className="DivForLogo">
                    <img className="logo" id={props.id} src={props.pict} alt=''/>
                </div>
                <div className="DivForPar">
                    <p className="ResortName">{props.resort}</p>
                </div>
            </div>
        </a>
    )
}

export default ToursTemplateSection;