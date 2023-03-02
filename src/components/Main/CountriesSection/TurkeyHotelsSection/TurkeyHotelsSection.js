import React, { useEffect, useState } from "react";
import "./TurkeyHotelsSection.css";
import {setHotelsActionCreator} from "../../../../Redux/hotels/CountryHotelsSectionAction";
import HotelsTemplateElements from "./HotelsTemplateElements/HotelsTemplateElements"
import { useSelector, useDispatch } from 'react-redux';

const TurkeyHotelsSection = () => {
    const [currentVisibleHotels, setCurrentVisibleHotels] = useState(4);
    const addMoreHotels = () => {
        setCurrentVisibleHotels(currentVisibleHotels + 2);
    }

    const dispatch = useDispatch();
    const hotelsTemplate = useSelector(state => state.countryHotelsSectionVar);

    useEffect(() => {
        dispatch(setHotelsActionCreator())
    }, [])

    if (!hotelsTemplate) return null;

    const hotelsTemplateElements = hotelsTemplate.slice(0, currentVisibleHotels).map(hotel =>
        <HotelsTemplateElements key={hotel.id}
            id={hotel.id}
            hotelLogo={hotel.hotelLogo}
            sprite={hotel.sprite}
            hotelName={hotel.hotelName}
            hotelCategory={hotel.hotelCategory}
            resortName={hotel.resortName}
        />)

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