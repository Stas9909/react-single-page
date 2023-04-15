import React, { useState, useRef, useEffect } from "react";
import "./CountriesNav.css";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import { clearSearchResultsActionCreator } from "../../../../Redux/searchHotel/searchHotelResultsAction";

const CountriesNav = (props) => {
    const [showCountriesList, setShowList] = useState(false);
    function DeployCountriesList() {
        setShowList(!showCountriesList)
    }

    const [showCategoriesList, setShowCategoriesList] = useState(false);
    function DeployCategoriesList() {
        setShowCategoriesList(!showCategoriesList)
    }

    const location = useLocation()

    const retrieveQueryParams = (queryParams) => {
        if (!queryParams) return {};
        const query = queryParams.split("?")[1];
        const valuesObj = query.split("&").reduce((acc, item) => {
            const [key, value] = item.split("=");
            acc[key] = value;
            return acc;
        }, {});
        console.log(valuesObj)
        return valuesObj;
    }

    const queryParam = retrieveQueryParams(location.search)

    const dispatch = useDispatch();

    useEffect(() => {
        retrieveQueryParams(location.search);
    }, [])

    return (
        <div className="CountriesNav">
            <div className="CountriesNavWrap">
                <Formik
                    initialValues={{
                        hotelName: '',
                        turkey: queryParam.turkey || false,
                        egypt: queryParam.egypt || false,
                        OAE: queryParam.OAE || false,
                        oneStar: queryParam.oneStar || false,
                        twoStars: queryParam.twoStars || false,
                        threeStars: queryParam.threeStars || false,
                        fourStars: queryParam.fourStars || false,
                        fiveStars: queryParam.fiveStars || false,
                    }}
                    onSubmit={(values, { resetForm }) => {

                        props.handleFiltersBtn(values)
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
                                >
                                    {({ field }) => (
                                        <div className="divForInputs">
                                            <input
                                                {...field}
                                                className="InputForHotelSearching"
                                                type="text"
                                                placeholder="Знайти готель"
                                            />
                                            {/* {values.hotelName.length > 0 && ( */}
                                            <button className="btnForHotelSearch" type="submit">
                                                Найти
                                            </button>
                                            {/* )} */}
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="DivForCountriesSelect">
                                <div className="DivForCountriesList">
                                    <p className="ParForCountryTxt" onClick={DeployCountriesList}>Країна</p>
                                    <div className={showCountriesList ? "showSelectedList" : "hideSelectedList"}>
                                        <div className="generalClassForHotels turkeyHotels">
                                            <Field type="checkbox" name="turkey" className="chooseMe" id="chooseTurkey" />
                                            <div className="LinkForCountry"
                                                onClick={() => {
                                                    dispatch(clearSearchResultsActionCreator());
                                                }}>Туреччина</div>
                                        </div>
                                        <div className="generalClassForHotels egyptHotels">
                                            <Field type="checkbox" name="egypt" className="chooseMe" id="chooseEgypt" />
                                            <div className="LinkForCountry"
                                                onClick={() => {
                                                    dispatch(clearSearchResultsActionCreator());
                                                }}>Єгипет</div>
                                        </div>
                                        <div className="generalClassForHotels OAEHotels">
                                            <Field type="checkbox" name="OAE" className="chooseMe" id="chooseOAE" />
                                            <div className="LinkForCountry"
                                                onClick={() => {
                                                    dispatch(clearSearchResultsActionCreator());
                                                }}>ОАЕ</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="DivForCategoriesList">
                                    <p className="ParForCategoryTxt" onClick={DeployCategoriesList} style={{ showCategoriesList: "true" ? "ParForCategoryTxtSelected" : "ParForCategoryTxt" }}>Категорія</p>
                                    <div className={showCategoriesList ? 'showSelectedList' : "hideSelectedList"}>
                                        <div className="generalClassForHotels OneStarHtls">
                                            <Field type="checkbox" name="oneStar" className="chooseMe" id="selectOneStar" />
                                            <div className="LinkForCategory">1*</div>
                                        </div>
                                        <div className="generalClassForHotels TwoStarHtls">
                                            <Field type="checkbox" name="twoStars" className="chooseMe" id="selectTwoStars" />
                                            <div className="LinkForCategory">2*</div>
                                        </div>
                                        <div className="generalClassForHotels ThreeStarHtls">
                                            <Field type="checkbox" name="threeStars" className="chooseMe" id="selectThreeStars" />
                                            <div className="LinkForCategory">3*</div>
                                        </div>
                                        <div className="generalClassForHotels FourStarHtls">
                                            <Field type="checkbox" name="fourStars" className="chooseMe" id="selectFourStars" />
                                            <div className="LinkForCategory">4*</div>
                                        </div>
                                        <div className="generalClassForHotels FiveStarHtls">
                                            <Field type="checkbox" name="fiveStars" className="chooseMe" id="selectFiveStars" />
                                            <div className="LinkForCategory">5*</div>
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



