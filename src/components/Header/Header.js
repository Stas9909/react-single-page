import React from "react";
// import style from "./Header.module.css";
import "./Header.css";
import emblem from "../../Assets/T&T.png";
import UpperNav from "./UpperNav/UpperNav";

const Header = () => {
    return (
      <header>
        <div className="AgencyNameDiv">
          <img className="Emblem" src={emblem} alt=''/>
        </div>
        <UpperNav/>
        <div className="DivForBtnRequest">
          <input className="BtnRequest" type="button" value="відправити запит"/>
        </div>
        {/* <p className={style.paragraph}>{props.state.key1}</p> */}
      </header>
    )
  }

  export default Header