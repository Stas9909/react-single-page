import "./Header.css";
import emblem from "../../Assets/T&T.png";
import regIcon from "../../Assets/216935.png";
import UpperNav from "./UpperNav/UpperNav";
import React, { useState } from 'react';

//1)
// const addStyle = () => {
//   document.querySelector(".PopupField").classList.add("RegField")
// }

// const removeStyle = () => {
//   document.querySelector(".PopupField").classList.remove("RegField")
// }

//2)
  const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  function addStyle () {
    setShowPopup(!showPopup)
  }

//3)
  // const Header = (props) => {
  //   function addStyle () {
  //     let classNames = "PopupField";
  //     if(props.RegField) {
  //       classNames += " RegField"
  //       console.log(classNames)
  //     }
  //   }

    return (
      <header>
        <div className="AgencyNameDiv">
          <img className="Emblem" src={emblem} alt=''/>
        </div>
        <UpperNav/>
        <div data-tooltip="Увійти" className="DivForRegIcon">
          <img className="regIcon" onClick={addStyle} src={regIcon} alt=''/>
        </div>       

        <div className="DivForBtnRequest">
          <input className="BtnRequest" type="button" value="відправити запит"/>
        </div>

        <div className={showPopup ? 'PopupField' : 'RegField'}></div>
        {/* <div className='PopupField'></div> */}
      </header>
    )
  }

  export default Header;