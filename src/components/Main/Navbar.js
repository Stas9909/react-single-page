import React from "react";
import "./Navbar.css";
import {useState} from "react";
import Nav from 'react-bootstrap/Nav';


const Navbar = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (id) => {
    setToggleState(id)
  }

  return (
    <nav className="Navbar">
      <div className="BlocTabs">
        <button className={toggleState === 1 ? "TabActive" : "Tab"} onClick={() => toggleTab(1)}>тури online</button>
        <button className={toggleState === 2 ? "TabActive" : "Tab"} onClick={() => toggleTab(2)}>гарячі тури</button>
      </div>
     
      <div className={toggleState === 1 ? "ContentTab1" : "ContentTab2"}>
        <div className="DivForInput">
          <p className="NavText">Куди</p>
          <select id="NavInput" className="SelectDestination">
            <optgroup label="Єгипет">
              <option value="Eg1">Всі курорти</option>
              <option value="Eg2">Шарм</option>
              <option value="Eg3">Хургада</option>
              <option value="Eg4">Марса Алам</option>
              <option value="Eg5">Дахаб</option>
              <option value="Eg6">Таба</option>
            </optgroup>
            <optgroup label="Туреччина">
              <option value="TRY1">Всі курорти</option>
              <option value="TRY2">Аланія</option>
              <option value="TRY3">Анталія</option>
              <option value="TRY4">Кемер</option>
              <option value="TRY5">Мармаріс</option>
              <option value="TRY6">Фетхіє</option>
            </optgroup>
            <optgroup label="Домінікана">
              <option value="DOM1">Всі курорти</option>
              <option value="DOM2">Пунта Кана</option>
              <option value="DOM3">Бока Чіка</option>
              <option value="DOM4">Баваро</option>
              <option value="DOM5">Ла Романа</option>
              <option value="DOM6">Макао</option>
            </optgroup>
          </select>
        </div>
        <div className="DivForInput">
          <p className="NavText">Звідки</p>
          <select id="NavInput" className="SelectDeparture"/>
        </div>
        <div className="DivForInput">
          <p className="NavText">Дата початку туру</p>
          <div className="DivForNavDate">
            <input className="NavDate" id="From" type="date"/>
            <input className="NavDate" id="To" type="date"/>
          </div> 
        </div>
        <div className="DivForInput">
          <p className="NavText">Тривалість</p>
          <select id="NavInput" className="SelectDuration"/>
        </div>
        <div className="DivForInput">
          <p className="NavText">Туристи</p>
          <select id="NavInput" className="SelectTouristsNumber"/>
        </div>
        <input className="SearchingTour" type="button" value="знайти тури"/>

      </div>

      <div className={toggleState === 2 ? "ContentTab1" : "ContentTab2"}>
        <p>CBA</p>
      </div>
    </nav>
  );
}

export default Navbar;