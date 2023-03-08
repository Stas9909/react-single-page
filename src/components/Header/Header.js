import "./Header.css";
import emblem from "../../Assets/T&T.png";
import regIcon from "../../Assets/216935.png";
import UpperNav from "./UpperNav/UpperNav";
import React, { useState, useEffect, useRef } from 'react';
import avaLogined from "../../Assets/man-avatar2.jpg";
import avaLogined2 from "../../Assets/girl-avatar18.jpg";
import avaLogined3 from "../../Assets/girl-avatar.jpg";
import { Formik, Field, Form } from "formik";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  function addStyle() {
    setShowPopup(!showPopup)
    
  }

  const [errorMessage, setErrorMessage] = useState({});
  const [userInfo, setUserInfo] = useState(false);
  function logOutHandler() {
    setUserInfo(!userInfo)
  }

  const [logValue, setLogValue] = useState('');
  const [passValue, setPassValue] = useState('');

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
    // e.preventDefault();

    let { wrongLog, wrongPass } = document.forms[0];

    const userDatabase = (database.find((user) => user.login === wrongLog.value) ||
      database.find((user) => user.mail === wrongLog.value));
    if (userDatabase) {
      if (userDatabase.password != wrongPass.value) {
        setErrorMessage({ name: "wrongPass", message: error.wrongPassword });
      }
      else {
        setUserInfo(userDatabase);
      }
    }
    else {
      setErrorMessage({ name: "wrongLog", message: error.wrongLogin });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessage.name && (<div className="error">{errorMessage.message}</div>)

  const rememberTheLog = useRef();
  const rememberThePass = useRef();
  const rememberTheUser = useRef();

  useEffect(() => {
    const log = localStorage.getItem("rememberTheLog")
    const pass = localStorage.getItem("rememberThePass")
    const userDatabase = (database.find((user) => user.login === log) ||
      database.find((user) => user.mail === log));
    if (userDatabase) {
      if (userDatabase.password === pass) {
        setUserInfo(userDatabase);
      }
    }
  }, [])

  const handleRememberMe = (e) => {
    localStorage.setItem("rememberTheUser", e.target.checked)
    if (e.target.checked) {
      if (database.find((user) => (user.login === logValue && user.password === passValue))) {
        localStorage.setItem("rememberTheLog", logValue)
        localStorage.setItem("rememberThePass", passValue)
      }
    } else {
      localStorage.removeItem("rememberTheLog")
      localStorage.removeItem("rememberThePass")
    }
  }

  const renderForm = ((showPopup ? userInfo : !userInfo) //если пользователь залогинен
    ? <div className='RegField' />
    : <div className={showPopup ? 'PopupField' : 'RegField'}>
      <Formik
        initialValues={{
          wrongLog: "",
          wrongPass: "",
          flag: false,
        }}
        onSubmit={handlerSubmit}
      >
        <Form className="articleForm">
          <div className="DivForIdent">
            <label className="Label" htmlFor="userLogin">Ім'я користувача або e-mail (user1)</label>

            <Field id="userLogin"
              autoComplete="on"
              className="formInput"
              type="login"

              value={logValue}
              onChange={(e) => setLogValue(e.target.value)}

              ref={rememberTheLog}
              name="wrongLog"
            />
            {renderErrorMessage("wrongLog")}
          </div>
          <div className="form-group">
            <label className="Label" htmlFor="userPass">Пароль (pass1)</label>

            <Field id="userPass"
              autoComplete="on"
              className="formInput"
              type="password"

              value={passValue}
              onChange={(e) => setPassValue(e.target.value)}

              ref={rememberThePass}
              name="wrongPass"
            />
            {renderErrorMessage("wrongPass")}
          </div>
          <div className="loginRemember">
            <label className="Label">
              <input type="checkbox" name="flag" id="rememberme"
                ref={rememberTheUser} onChange={handleRememberMe} />
              Запам'ятати мене
            </label>
          </div>
          <div className="loginSubmit">
            <Field id="submit" className="submitInput" type="submit" value="Увійти" />
          </div>
        </Form>
      </Formik>
    </div>)

  return (
    <header>
      <div className="AgencyNameDiv">
        <img className="Emblem" src={emblem} alt='' />
      </div>
      <UpperNav />
      <div className="DivForBtnRequest">
        <input className="BtnRequest" type="button" value="відправити запит" />
      </div>
      {
        !userInfo // isSubmitted 
          ? (<div data-tooltip="Увійти" className="DivForRegIcon">
            <img className="regIcon" onClick={addStyle} src={regIcon} alt='' />
          </div>)
          : (<div className="DivForLogined">
            <img className="avaLogined" onClick={logOutHandler} src={userInfo.avatarForLogined} alt='' />
          </div>)
      }
      {renderForm}
    </header>
  )
}

export default Header;