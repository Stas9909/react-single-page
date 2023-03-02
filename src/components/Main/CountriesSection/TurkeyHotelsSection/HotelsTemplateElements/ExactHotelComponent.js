import React from "react";
import "./ExactHotelComponent.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ExactHotelComponent = () => {
  const { state: { id } } = useLocation()
  const hotelsArray = useSelector(state => state.countryHotelsSectionVar)
  const certainHotel = hotelsArray.find(hotel => hotel.id === id)

  const { hotelName, resortName, hotelCategory } = certainHotel;

  return (
    <div className="exactHotelComponent">
      <div>
        <p>{hotelName}</p>
        <p>{resortName}</p>
        <p>{hotelCategory}</p>
      </div>
    </div>
  )
}

export default ExactHotelComponent;