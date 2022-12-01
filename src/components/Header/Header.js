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

        <div className={showPopup ? 'PopupField' : 'RegField'}>
          <form class="articleForm">
            <div className="DivForIdent">
              <label className="Label" for="userLogin">Ім'я користувача або e-mail</label>
              <input id="userLogin" className="formInput" type="text" name="log"/>
            </div>
            <div class="form-group">
              <label className="Label" for="userPass">Пароль</label>
              <input id="userPass" className="formInput" type="text" name="pass"/>
            </div>
            <div className="loginRemember">
              <label className="Label">
                <input type="checkbox" name="rememberme" id="rememberme" value="forever"/>
                Запам'ятати мене
              </label>
            </div>
            <div className="loginSubmit">
              <input id="submit" className="submitInput" type="submit" value="Увійти"/>
            </div>
          </form>
        </div>
        {/* <div className='PopupField'></div> */}
      </header>
    )
  }

  export default Header;