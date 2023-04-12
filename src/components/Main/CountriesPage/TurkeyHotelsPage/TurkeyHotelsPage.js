import React, { useEffect, useState } from "react";
import "./TurkeyHotelsPage.css";
import { setHotelsActionCreator } from "../../../../Redux/hotels/CountryHotelsSectionAction";
// import { setSearchResultsActionCreator } from "../../../../Redux/searchHotel/searchHotelResultsAction";
import HotelsTemplateElements from "../HotelsTemplateElements/HotelsList"
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from "react-router-dom";

const TurkeyHotelsPage = () => {
    const location = useLocation()//из pathname в location вытягиваем название страны
    const countryName = location.pathname.split("/")[location.pathname.split("/").length - 1]

    const [currentVisibleHotels, setCurrentVisibleHotels] = useState(4);
    const addMoreHotels = () => {
        setCurrentVisibleHotels(currentVisibleHotels + 2);
    }

    const dispatch = useDispatch();
    const hotelsTemplate = useSelector(state => state.countryHotelsSectionVar);
    // const searchResults = useSelector(state => state.searchHotelResultsVar);

    useEffect(() => {
        dispatch(setHotelsActionCreator(countryName))
    }, [])

    const hotelsTemplateElements = hotelsTemplate
        ? hotelsTemplate.slice(0, currentVisibleHotels).map(hotel => {
            const { hotelName } = hotel || {};
            return <HotelsTemplateElements
                key={hotel.id}
                id={hotel.id}
                hotelLogo={hotel.hotelLogo}
                sprite={hotel.sprite}
                hotelName={hotelName}
                hotelCategory={hotel.hotelCategory}
                resortName={hotel.resortName}
            />
        })
        : null;

    return (
        <div className="CountryHotelsPage">
            <div className="CountryNavWrap">
                {hotelsTemplateElements}
                <div className="divForInput">
                    <input className={currentVisibleHotels >= hotelsTemplate.length ? 'hideBtn' : "InputForMoreProp"} onClick={addMoreHotels} type="button" value="показати ще" />
                </div>
            </div>
        </div>
    )
}

export default TurkeyHotelsPage;