import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Navbar = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (id) => {
    setToggleState(id)
  }

  return (
    <nav className="Navbar">

      <Formik
        initialValues={{
          destination: "Every Egypt's resort",
          fromWhere: "Kyiv",
          dateFrom: "",
          dateTo: "",
          duration: "7",
          quantity: "",
        }}

        const validationSchema={Yup.object({
          destination: Yup.string(),
          fromWhere: Yup.string(),
          dateFrom: Yup.date()
            .required("Select date"),
          dateTo: Yup.date()
            .required("Select date"),
          duration: Yup.number(),
          quantity: Yup.number()
            .required("Select quantity")
            .min(1, "Min 1")
            .max(10, "Max 10"),
        })}
        onSubmit={values =>
          console.log(JSON.stringify(values, null, 2))}
      >
        <Form>
          <div className="BlocTabs">
            <button className={toggleState === 1 ? "TabActive" : "Tab"} onClick={() => toggleTab(1)}>тури online</button>
            <button className={toggleState === 2 ? "TabActive" : "Tab"} onClick={() => toggleTab(2)}>гарячі тури</button>
          </div>

          <div className={toggleState === 1 ? "ContentTab1" : "ContentTab2"}>

            <div className="DivForInput">
              <label htmlFor="SelectDestination" className="NavText">Куди</label>
              <Field className="NavInput" id="SelectDestination" name="destination" as="select">
                <optgroup label="Єгипет">
                  <option value="Every Egypt's resort">Всі курорти</option>
                  <option value="Sharm">Шарм</option>
                  <option value="Hurgada">Хургада</option>
                  <option value="Marsa Alam">Марса Алам</option>
                  <option value="Dahab">Дахаб</option>
                  <option value="Taba">Таба</option>
                </optgroup>
                <optgroup label="Туреччина">
                  <option value="Every Turkish's resort">Всі курорти</option>
                  <option value="Alania">Аланія</option>
                  <option value="Antalia">Анталія</option>
                  <option value="Kemer">Кемер</option>
                  <option value="Marmaris">Мармаріс</option>
                  <option value="Fethyie">Фетхіє</option>
                </optgroup>
                <optgroup label="Домінікана">
                  <option value="Every Dominicana's resort">Всі курорти</option>
                  <option value="Punta Cana">Пунта Кана</option>
                  <option value="Boka Chica">Бока Чіка</option>
                  <option value="Bavaro">Баваро</option>
                  <option value="Le Romana">Ла Романа</option>
                  <option value="Makao">Макао</option>
                </optgroup>
              </Field>
            </div>
            <div className="DivForInput">
              <label htmlFor="SelectDeparture" className="NavText">Звідки</label>
              <Field className="NavInput" id="SelectDeparture" name="fromWhere" as="select">
                <option value="Kyiv">Київ</option>
                <option value="Odessa">Одеса</option>
                <option value="Dnepr">Дніпр</option>
                <option value="Lviv">Львів</option>
                <option value="Kharkiv">Харків</option>
                <option value="Zaporozhye">Запоріжжя</option>
              </Field>
            </div>
            <div className="DivForInput">
              <label htmlFor="From" className="NavText">Дата початку туру</label>
              <div className="DivForNavDate">
                <Field className="NavDate" id="From" name="dateFrom" type="date" />
                <Field className="NavDate" id="To" name="dateTo" type="date" />
              </div>
              <ErrorMessage className='errorForSearchPanel' name='dateFrom' component='div' />
            </div>
            <div className="DivForInput">
              <label htmlFor="SelectDuration" className="NavText">Тривалість</label>
              <Field className="NavInput" id="SelectDuration" name='duration' as="select">
                <option value="7">7</option>
                <option value="10">10</option>
                <option value="14">14</option>
              </Field>
            </div>
            <div className="DivForInput">
              <label htmlFor="SelectTouristsNumber" className="NavText">Туристи</label>
              <Field className="NavInput" id="SelectTouristsNumber" name="quantity" />
              <ErrorMessage className='errorForSearchPanel' name='quantity' component='div' />
            </div>

            <input className="SearchingTour" type="submit" value="знайти тури" />

          </div>
          <div className={toggleState === 2 ? "ContentTab1" : "ContentTab2"}>
            <p>CBA</p>
          </div>
        </Form>
      </Formik>

    </nav>
  );
}

export default Navbar;