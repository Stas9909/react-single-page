import React from "react";
import "./UpperNav.css";
import {NavLink} from "react-router-dom";

const UpperNav = () => {
    return (
        <nav className="UpperNav">
            <div className="NavUl">
                <li className="Navli"><NavLink to='/' className="Ref">пошук тура</NavLink></li> 
                <li className="Navli"><NavLink to='/countries' className="Ref">країни</NavLink></li> 
                <li className="Navli"><NavLink to='/services' className="Ref">послуги</NavLink></li> 
                <li className="Navli"><NavLink to='/about' className="Ref">о нас</NavLink></li>     
            </div>
        </nav>
    )
}

export default UpperNav;