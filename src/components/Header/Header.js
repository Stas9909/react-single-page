import "./Header.css";
import emblem from "../../Assets/T&T.png";
import regIcon from "../../Assets/216935.png";
import UpperNav from "./UpperNav/UpperNav";
import React, { useState, useEffect } from 'react';
import avaLogined from "../../Assets/man-avatar2.jpg";
import avaLogined2 from "../../Assets/girl-avatar18.jpg";
import avaLogined3 from "../../Assets/girl-avatar.jpg";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  function addStyle () {
    setShowPopup(!showPopup)
  }

  const [errorMessage, setErrorMessage] = useState({});
  const [userInfo, setUserInfo] = useState(null);

  const database = [
    {
      id: 1,
      login: "user1",
      mail: "user1@gmail.com",
      password: "pass1",
      avatarForLogined: avaLogined,
    },
    {
      id: 2,
      login: "user2",
      mail: "user2@gmail.com",
      password: "pass2",
      avatarForLogined: avaLogined2,
    },
    {
      id: 3,
      login: "user3",
      mail: "user3@gmail.com",
      password: "pass3",
      avatarForLogined: avaLogined3,
    }
  ]

  const error = {
    wrongLogin: "invalid username",
    wrongPassword: "invalid password"
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
    if (userDatabase) {
      if (userDatabase.password != wrongPass.value){
        setErrorMessage({name: "wrongPass", message: error.wrongPassword});
      }
      else {
        // setIsSubmitted(true);
        setUserInfo(userDatabase);
      }
    }
    else{
      setErrorMessage({name: "wrongLog", message: error.wrongLogin});
    }
  };

  const renderErrorMessage = (name) => 
    name === errorMessage.name && (<div className="error">{errorMessage.message}</div>)
       
  const renderForm = ((userInfo) // ((isSubmitted)
                     ? <div className='RegField'/>
                     : <div className={showPopup ? 'PopupField' : 'RegField'}>
    <form onSubmit={handlerSubmit} className="articleForm">
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
      <div className="form-group">
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
        
        userInfo// isSubmitted 
        ? <div className="DivForLogined">
          <img className="avaLogined" src={userInfo.avatarForLogined} alt=''/>  
        </div> 
        : (<div data-tooltip="Увійти" className="DivForRegIcon">
        <img className="regIcon" onClick={addStyle} src={regIcon} alt=''/>
      </div>) 
      }    
      {renderForm}  
    </header>
  )
}

export default Header;