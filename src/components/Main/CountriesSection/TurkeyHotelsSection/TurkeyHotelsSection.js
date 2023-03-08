import React, { useEffect, useState } from "react";
import "./TurkeyHotelsSection.css";
import { setHotelsActionCreator } from "../../../../Redux/hotels/CountryHotelsSectionAction";
import { setSearchResultsActionCreator } from "../../../../Redux/searchHotel/searchHotelResultsAction";
import HotelsTemplateElements from "./HotelsTemplateElements/HotelsTemplateElements"
import { useSelector, useDispatch } from 'react-redux';

const TurkeyHotelsSection = () => {
    const [currentVisibleHotels, setCurrentVisibleHotels] = useState(4);
    const addMoreHotels = () => {
        setCurrentVisibleHotels(currentVisibleHotels + 2);
    }

    const dispatch = useDispatch();
    const hotelsTemplate = useSelector(state => state.countryHotelsSectionVar);
    const searchResults = useSelector(state => state.searchHotelResultsVar);

    useEffect(() => {
        (dispatch(setHotelsActionCreator()))
    }, [dispatch])

    const hotelsTemplateElements = (searchResults && searchResults.length > 0)
        ? searchResults.slice(0, currentVisibleHotels).map(hotel => {
            const { hotelName } = hotel || {};
            return <HotelsTemplateElements key={hotel.id}
                id={hotel.id}
                hotelLogo={hotel.hotelLogo}
                sprite={hotel.sprite}
                hotelName={hotelName}
                hotelCategory={hotel.hotelCategory}
                resortName={hotel.resortName}
            />})
        : (hotelsTemplate && hotelsTemplate.length > 0)
            ? hotelsTemplate.slice(0, currentVisibleHotels).map(hotel => {
                const { hotelName } = hotel || {};
                return <HotelsTemplateElements key={hotel.id}
                    id={hotel.id}
                    hotelLogo={hotel.hotelLogo}
                    sprite={hotel.sprite}
                    hotelName={hotelName}
                    hotelCategory={hotel.hotelCategory}
                    resortName={hotel.resortName}
                />})
            : null;

    return (
        <div className="TurkeyHotelsSection">
            <div className="TurkeyNavWrap">
                {hotelsTemplateElements}
                <div className="divForInput">
                    <input className={currentVisibleHotels >= hotelsTemplate.length ? 'hideBtn' : "InputForMoreProp"} onClick={addMoreHotels} type="button" value="показати ще" />
                </div>
            </div>
        </div>
    )
}

export default TurkeyHotelsSection;