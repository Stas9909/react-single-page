import React from "react";
import "./ToursTemplateSection.css";
import { NavLink } from "react-router-dom";

const ToursTemplateSection = (props) => {

    return (
        <NavLink to={`/react-single-page/${props.route}`} className="ref2">
            <div className="PopDestination" key={props.id}>
                <div className="DivForLogo">
                    <img className="logo" src={require(`../../../Assets/${props.pict}`)} alt='' />
                </div>
                <div className="DivForPar">
                    <p className="ResortName">{props.resort}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default ToursTemplateSection;