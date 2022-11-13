import React from "react";
import "./UpperNav.css";

const UpperNav = () => {
    return (
        <nav className="UpperNav">
            <ul className="NavUl">
                <li className="Navli"><a className="Ref" href="#">пошук тура</a></li> 
                <li className="Navli"><a className="Ref" href="#">країни</a></li> 
                <li className="Navli"><a className="Ref" href="#">послуги</a></li> 
                <li className="Navli"><a className="Ref" href="#">о нас</a></li>       
            </ul>
        </nav>
    )
}

export default UpperNav;