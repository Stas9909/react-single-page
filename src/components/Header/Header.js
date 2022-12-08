import "./Header.css";
import emblem from "../../Assets/T&T.png";
import regIcon from "../../Assets/216935.png";
import UpperNav from "./UpperNav/UpperNav";
import PersonalSection from "./PersonalSection/PersonalSection";
import React, { useState, useEffect } from 'react';
import avaLogined from "../../Assets/man-avatar.webp";
import avaLogined2 from "../../Assets/Tourist1.jpeg";

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
  
  // const [userLogin, setUserLogin] = useState('');
  // const [userPass, setUserPass] = useState('');
  // const [submit, setSubmit] = useState(false);

  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      id: 1,
      login: "user1",
      mail: "user1@gmail.com",
      password: "pass1",
      avatarForLogined: "avaLogined"
    },
    {
      id: 2,
      login: "user2",
      mail: "user2@gmail.com",
      password: "pass2",
      avatarForLogined: "avaLogined2"
    },
    {
      id: 3,
      login: "user3",
      mail: "user3@gmail.com",
      password: "pass3",
      avatarForLogined: "avaLogined2"
    }
  ]

  // database.map(index => <img className="avaLogined" id={index.id} avatarForLogined={index.avatarForLogined} alt=''/>)

  const error = {
    wrongLog: "invalid username",
    wrongPass: "invalid password"
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    let {wrongLog, wrongPass} = document.forms[0];
    // let  form  = document.forms[0];
    // let {wrongLog, wrongPass} = form;
    
    //Перебрали массив с пом find, так-как он возвр первый найденный эл-т
    //(в д.с. объект) и если этот объект = тому, что мы ввели, то...
    const userDatabase = (database.find((user) => user.login===wrongLog.value)||
    database.find((user) => user.mail===wrongLog.value));
    if(userDatabase){
      if(userDatabase.password != wrongPass.value){
        setErrorMessage({name: "wrongPass", message: error.wrongPass});
      }
      else{
        setIsSubmitted(true);
      }
    }
    else{
      setErrorMessage({name: "wrongLog", message: error.wrongLog});
    }
  };

  const renderErrorMessage = (name) => 
    name === errorMessage.name && (<div className="error">{errorMessage.message}</div>)
  



  const renderForm = ((isSubmitted) 
                     ? <div className='RegField'/>
                     : <div className={showPopup ? 'PopupField' : 'RegField'}>
    <form onSubmit={handlerSubmit} class="articleForm">
      <div className="DivForIdent">
        <label className="Label" for="userLogin">Ім'я користувача або e-mail</label>
    
        <input id="userLogin" 
        autoComplete="on"
        className="formInput" 
        type="text" 
        name="wrongLog"
        required/>
        {renderErrorMessage("wrongLog")}
      </div>
      <div class="form-group">
        <label className="Label" for="userPass">Пароль</label>
      
        <input id="userPass" 
        autoComplete="on"
        className="formInput" 
        type="text" 
        name="wrongPass"
        required/>
        {renderErrorMessage("wrongPass")}
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
  </div>)

  return (
    <header>
      <div className="AgencyNameDiv">
        <img className="Emblem" src={emblem} alt=''/>
      </div>
      <UpperNav/>    
      <div className="DivForBtnRequest">
        <input className="BtnRequest" type="button" value="відправити запит"/>
      </div>       
      {
        isSubmitted 
        ? <div className="DivForLogined">
          {/* <img className="avaLogined" src={avaLogined} alt=''/>   */}
          <img className="avaLogined" src={avaLogined} alt=''/>
        </div> 
        : (<div data-tooltip="Увійти" className="DivForRegIcon">
        <img className="regIcon" onClick={addStyle} src={regIcon} alt=''/>
      </div>) 
      }    
      {renderForm}  
      {/* <div className='PopupField'></div> */}
    </header>
  )
}

export default Header;