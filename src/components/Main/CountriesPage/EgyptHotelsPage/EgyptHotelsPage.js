import "./EgyptHotelsPage.css";
import React, { useEffect, useState } from "react";
import { setHotelsActionCreator } from "../../../../Redux/hotels/CountryHotelsSectionAction";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from "react-router-dom";
import HotelsTemplateElements from "../HotelsTemplateElements/HotelsList";

const EgyptHotelsPage = () => {
    const location = useLocation()
    const countryName = location.pathname.split("/")[location.pathname.split("/").length - 1]

    const [currentVisibleHotels, setCurrentVisibleHotels] = useState(4);
    const addMoreHotels = () => {
        setCurrentVisibleHotels(currentVisibleHotels + 2);
    }

    const dispatch = useDispatch();
    const hotelsTemplate = useSelector(state => state.countryHotelsSectionVar);
    const searchResults = useSelector(state => state.searchHotelResultsVar);

    useEffect(() => {
        dispatch(setHotelsActionCreator(countryName))
    }, [])

    // event.target.includes(".LinkForCountry ") 

    const hotels = (searchResults?.length > 0 ? searchResults : hotelsTemplate)
    const hotelsTemplateElements = hotels
        ? hotels.slice(0, currentVisibleHotels).map(hotel => {
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

export default EgyptHotelsPage;