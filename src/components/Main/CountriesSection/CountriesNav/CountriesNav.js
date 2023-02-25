import React, { useState, useRef } from "react";
import "./CountriesNav.css";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const CountriesNav = () => {

    const [showCountriesList, setShowList] = useState(false);
    function DeployCountriesList() {
        setShowList(!showCountriesList)
    }

    const [showCategoriesList, setShowCategoriesList] = useState(false);
    function DeployCategoriesList() {
        setShowCategoriesList(!showCategoriesList)
    }

    let hotelsTemplate = [
        { id: 1, hotelName: "LIBERTY LYKIA" },
        { id: 2, hotelName: "OLUDENIZ RESORT BY Z" },
        { id: 3, hotelName: "ORANGE COUNTY RESORT" },
        { id: 4, hotelName: "LONICERA RESORT & SPA HOTEL" },
        {id: 5, hotelName: "KARADUT CAVE HOTEL"}
    ]

    const [showButton, setShowButton] = useState(false);
    const isEmptyField = useRef(null);

    const handlerInputChange = () => {
        setShowButton(isEmptyField.current.value.length > 0)
    }

    return (
        <div className="CountriesNav">
            <div className="CountriesNavWrap">
                <Formik
                    initialValues={{
                        hotelName: '',
                        turkey: false,
                        egypt: false,
                        OAE: false,
                        oneStar: false,
                        twoStars: false,
                        threeStars: false,
                        fourStars: false,
                        fiveStars: false,
                    }}

                    const validationSchema={Yup.object({
                        hotelName: Yup.string()
                            .min(2, 'Must be 2 characters or more')
                            .matches(/^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)*(?! )$/, 'Only latin letters,numbers and one space in raw are allowed')
                    })}
                    onSubmit={(values, { resetForm }) => {

                        const filteredHotels = hotelsTemplate.filter(hotel =>
                            hotel.hotelName.toLowerCase().includes(values.hotelName.toLowerCase())
                        );
                        console.log(filteredHotels);

                        resetForm();
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValidating, isValid, dirty, setFieldValue }) => (
                        <Form>
                            <div className="DivForHotelSerching">

                                <Field
                                    id='SearchHotel'
                                    name="hotelName"
                                    className="InputForHotelSearching"
                                    type="text"
                                    placeholder="Знайти готель"
                                // onChange={e => searchHotels(e.target.value)}//onChange={e => searchHotels(e.target.value)} - это то же самое, что и onChange={handleChange}
                                >
                                    {({ field }) => (
                                        <div>
                                            <input
                                                {...field}
                                                className="InputForHotelSearching"
                                                type="text"
                                                placeholder="Знайти готель"

                                                // onChange={(e) => {
                                                //     field.onChange(e);//
                                                //     handlerInputChange();
                                                // }}
                                                // ref={isEmptyField}
                                            />
                                            {values.hotelName.length > 0 && (
                                            // {showButton && (
                                                <button className="btnForHotelSearch" type="submit">
                                                    Найти
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="DivForCountriesSelect">
                                <div className="DivForCountriesList">
                                    <p className="ParForCountryTxt" onClick={DeployCountriesList}>Країна</p>
                                    <div className={showCountriesList ? "showSelectedList" : "hideSelectedList"}>
                                        <div className="TurkeyHotels">
                                            <Field type="checkbox" name="turkey" className="chooseMe" id="chooseTurkey" />
                                            <NavLink to="/countries/turkey" className="LinkForCountry">Туреччина</NavLink>
                                        </div>

                                        <div className="EgyptHotels">
                                            <Field type="checkbox" name="egypt" className="chooseMe" id="chooseEgypt" />
                                            <NavLink to="/countries/egypt" className="LinkForCountry">Єгипет</NavLink>
                                        </div>

                                        <div className="OAEHotels">
                                            <Field type="checkbox" name="OAE" className="chooseMe" id="chooseOAE" />
                                            <NavLink to="/countries/OAE" className="LinkForCountry">ОАЕ</NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="DivForCategoriesList">
                                    {/* <p className="ParForCategoryTxt" onClick={DeployCategoryList}>Категорія</p> */}
                                    <p className="ParForCategoryTxt" onClick={DeployCategoriesList} style={{ showCategoriesList: "true" ? "ParForCategoryTxtSelected" : "ParForCategoryTxt" }}>Категорія</p>
                                    <div className={showCategoriesList ? 'showSelectedList' : "hideSelectedList"}>
                                        <div className="OneStarHtls">
                                            <Field type="checkbox" name="oneStar" className="chooseMe" id="selectOneStar" />
                                            <NavLink to="#" className="LinkForCategory">1*</NavLink>
                                        </div>
                                        <div className="TwoStarHtls">
                                            <Field type="checkbox" name="twoStars" className="chooseMe" id="selectTwoStars" />
                                            <NavLink to="#" className="LinkForCategory">2*</NavLink>
                                        </div>
                                        <div className="ThreeStarHtls">
                                            <Field type="checkbox" name="threeStars" className="chooseMe" id="selectThreeStars" />
                                            <NavLink to="#" className="LinkForCategory">3*</NavLink>
                                        </div>
                                        <div className="FourStarHtls">
                                            <Field type="checkbox" name="fourStars" className="chooseMe" id="selectFourStars" />
                                            <NavLink to="#" className="LinkForCategory">4*</NavLink>
                                        </div>
                                        <div className="FiveStarHtls">
                                            <Field type="checkbox" name="fiveStars" className="chooseMe" id="selectFiveStars" />
                                            <NavLink to="#" className="LinkForCategory">5*</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default CountriesNav;



