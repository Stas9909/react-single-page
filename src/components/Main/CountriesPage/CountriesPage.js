import React, { useEffect, useState } from "react";
import "./CountriesPage.css";
import CountriesNav from "./CountriesNav/CountriesNav";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setHotelsActionCreator } from "../../../Redux/hotels/CountryHotelsSectionAction";
import HotelsList from "./HotelsList/HotelsList";

const CountriesPage = () => {
    const [currentVisibleHotels, setCurrentVisibleHotels] = useState(4);
    const addMoreHotels = () => {
        setCurrentVisibleHotels(currentVisibleHotels + 2);
    }

    const dispatch = useDispatch();
    const allHotels = useSelector(state => state.countryHotelsSectionVar);

    const [currentHotels, setCurrentHotels] = useState([]);
    const [filteredData, setFilteredData] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const handleFiltersBtn = (values) => {
        const selectedValues = Object.getOwnPropertyNames(values).filter(key => values[key]);

        const filteredCountries = Object.fromEntries(Object.entries(allHotels).filter(arr => selectedValues.includes(arr[0])));

        const filteredCountriesArr = Object.values(filteredCountries).length ? Object.values(filteredCountries).flatMap(countries => countries) : currentHotels

        const filteredCategoryArr = filteredCountriesArr.filter(obj => { return selectedValues.includes(obj.category) });

        const isEmptyFilteredCategoryArr = filteredCategoryArr.length ? filteredCategoryArr : filteredCountriesArr;

        const searchResultsByHotelName = isEmptyFilteredCategoryArr.filter(hotel => {
            return hotel.hotelName.toLowerCase().includes(values.hotelName.toLowerCase())
        })

        const queryString = createQueryParams(values)
        navigate(`/countries/?${queryString}`)
        setFilteredData(searchResultsByHotelName)
    }

    const createQueryParams = (values) => {
        const generalData = Object.entries(values).filter(([key, value]) => value === true || value.length > 0).map(([key, value]) => `${key}=${value}`).join("&");
        return generalData;
    }

    const getQueryParams = (string) => {
        const query = string.split("?")[1];
        if (!query) return null;
        const valuesArr = Object.fromEntries(query.split("&").map(elem => elem.split("=")));

        if (valuesArr.hasOwnProperty("hotelName")) {
            handleFiltersBtn(valuesArr)
        }
         else {
            valuesArr.hotelName = "";
            handleFiltersBtn(valuesArr)
        }
    }

    const hotelsListForRender = (filteredData === null ? currentHotels : filteredData);

    useEffect(() => {
        dispatch(setHotelsActionCreator())
    }, [])

    useEffect(() => {
        let allHotelsArr = Object.values(allHotels).reduce((acc, val) => acc.concat(val), [])
        // let allHotelsArr = Object.values(allHotels).flatMap(country => country)
        setCurrentHotels(allHotelsArr)
    }, [allHotels])

    useEffect(() => {
        getQueryParams(location.search)
    }, [currentHotels])

    return (
        <div className="CountriesPage">
            <CountriesNav handleFiltersBtn={handleFiltersBtn} />
            <div className="wrapForRoutes">
                <div className="TurkeyHotelsSection">
                    <div className="TurkeyNavWrap">
                        {hotelsListForRender.length > 0 ?  <HotelsList currentVisibleHotels={currentVisibleHotels} list={hotelsListForRender} /> : <p>Found nothing</p> }

                        <div className="divForInput">
                            <input className={currentVisibleHotels >= hotelsListForRender.length ? 'hideBtn' : "InputForMoreProp"} onClick={addMoreHotels} type="button" value="показати ще" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountriesPage;
