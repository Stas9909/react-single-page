import React from "react";
import HotelsCard from "../HotelsTemplateElements/HotelsCard";
import "./HotelsList.css";

const HotelsList = (props) => {
  return (
    <div>
      {props.list.slice(0, props.currentVisibleHotels).map((hotel) => {
        const { hotelName } = hotel || {};
        return < HotelsCard
          key={hotel.id}
          id={hotel.id}
          hotelLogo={hotel.hotelLogo}
          sprite={hotel.sprite}
          hotelName={hotelName}
          hotelCategory={hotel.hotelCategory}
          resortName={hotel.resortName}
        />
      })}
    </div>
  );
}

export default HotelsList; 