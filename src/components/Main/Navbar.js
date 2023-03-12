import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import NavbarCustomSelect from "./NavbarCustomSelect/NavbarCustomSelect";

const Navbar = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (id) => {
    setToggleState(id)
  }

  const [hideSelection, setHideSelection] = useState(false)
  const hideSelectionHandler = () => {
    setHideSelection(!hideSelection)
  }

  return (
    <nav className="Navbar"
      onClick={(e) => { !e.target.classList.contains('selectOptionsWrapper') && hideSelectionHandler() }}
    >

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
      >

        {({ values, touched, setFieldValue }) => {
          return (
            <Form>
              <div className="BlocTabs">
                <button className={toggleState === 1 ? "TabActive" : "Tab"} onClick={() => toggleTab(1)}>тури online</button>
                <button className={toggleState === 2 ? "TabActive" : "Tab"} onClick={() => toggleTab(2)}>гарячі тури</button>
              </div>

              <div className={toggleState === 1 ? "ContentTab1" : "ContentTab2"}>

                <div className="DivForInput">
                  <NavbarCustomSelect label="Куди" setOptionValue={(value) => setFieldValue("destination", value)}
                    optionList={[{
                      optgroup: "Єгипет", id: 1, options: [{ name: 'Всі курорти', value: 'every Egypts resort', id: 'egypt-all' }, { name: 'Шарм', value: 'Sharm', id: 'egypt-sharm' }, { name: 'Хургада', value: 'Hurgada', id: 'egypt-hurgada' }, { name: 'Марса Алам', value: 'Marsa Alam', id: 'egypt-marsa-alam' }, { name: 'Дахаб', value: 'Dahab', id: 'egypt-dahab' }, { name: 'Таба', value: 'Taba', id: 'egypt-taba' }]
                    },
                    {
                      optgroup: "Туреччина", id: 2, options: [{ name: 'Всі курорти', value: 'every Turkeys resort', id: 'turkey-all' }, { name: 'Аланія', value: 'Alanya', id: 'turkey-alanya' }, { name: 'Анталія', value: 'Antalia', id: 'turkey-antalia' }, { name: 'Кемер', value: 'Kemer', id: 'turkey-kemer' }, { name: 'Мармаріс', value: 'Marmaris', id: 'turkey-marmaris' }, { name: 'Фетхіє', value: 'Fethyie', id: 'turkey-fethyie' }]
                    },
                    {
                      optgroup: "ОАЕ", id: 3, options: [{ name: 'Всі курорти', value: 'every UAE resort', id: 'uae-all' }, { name: 'Дубай', value: 'Dubai', id: 'uae-dubai' }, { name: 'Шарджа', value: 'Sharjah', id: 'uae-sharjah' }, { name: 'Абу Дабі', value: 'Abu Dhabi', id: 'uae-abu-dhabi' }, { name: 'Фуджейра', value: 'Fujairah', id: 'uae-fujairah' }, { name: 'Аджман', value: 'Ajman', id: 'uae-ajman' }]
                    },
                    {
                      optgroup: "Домінікана", id: 4, options: [{ name: 'Всі курорти', value: 'every Dominicans resort', id: 'dominicans-all' }, { name: 'Пунта Кана', value: 'Punta Cana', id: 'dominicans-punta-cana' }, { name: 'Санта Домінго', value: 'Santa Domingo', id: 'dominicans-santa-domingo' }, { name: 'Самана', value: 'Samana', id: 'dominicans-samana' }, { name: 'Ла Романа', value: 'La Romana', id: 'dominicans-la-romana' }, { name: 'Баваро', value: 'Bavaro', id: 'dominicans-bavaro' }]
                    }]}
                  />

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
                  <ErrorMessage className='errorForSearchPanel' id='MoveToTheRight' name='dateTo' component='div' />

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

                <div className="buttonHeightCorrection">
                  <button className="SearchingTour" type="submit">знайти тури</button>
                </div>

              </div>
              <div className={toggleState === 2 ? "ContentTab1" : "ContentTab2"}>
                <p>CBA</p>
              </div>
            </Form>
          )
        }}
      </Formik>
    </nav>
  );
}

export default Navbar;