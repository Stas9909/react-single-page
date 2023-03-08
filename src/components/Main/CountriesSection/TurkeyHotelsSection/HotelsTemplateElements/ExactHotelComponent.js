import React, {  useState } from "react";
import "./ExactHotelComponent.css";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const ExactHotelComponent = () => {
  // const { id } = useParams();
  const { state: { id } } = useLocation()

  const hotelsArray = useSelector(state => state.countryHotelsSectionVar)

  const certainHotel = hotelsArray.find(hotel => hotel.id === id)
  const { hotelTitleBackground, firstHotelPicture, secondHotelPicture, thirdHotelPicture, fourthHotelPicture, fifthHotelPicture, innerHotelName, innerResortName } = certainHotel;

  const [currentPicture, setCurrentPicture] = useState(firstHotelPicture);

  const handlePictureClick = (picture) => {
    setCurrentPicture(picture);
  };

  return (
    <div className="exactHotelComponent">
      <div className="divForHotelPictures" style={{ backgroundImage: `url(${require('../../../../../Assets/' + hotelTitleBackground)})` }}>
        <div className="transparentDivInsidePict">
          <div className="divForHotelName">
            <span className="spanForHtlName">
              <h1 className="hotelName">{innerHotelName}</h1>
              <h2 className="resortName">{innerResortName}</h2>
            </span>
          </div>
          <div className="divForMorePict">
            <div className="wrapperForHtlPict">
              <a className="linkForOtherPict linkForFirstPict" href="#" onClick={() => handlePictureClick(firstHotelPicture)}><img className="TurkeyHotelPict firstTurkeyPict" src={require(`../../../../../Assets/${firstHotelPicture}`)} alt='' /></a>
              <a className="linkForOtherPict" href="#"><img className="TurkeyHotelPict secondTurkeyPict" src={require(`../../../../../Assets/${secondHotelPicture}`)} alt='' /></a>
              <a className="linkForOtherPict" href="#"><img className="TurkeyHotelPict thirdTurkeyPict" src={require(`../../../../../Assets/${thirdHotelPicture}`)} alt='' /></a>
              <a className="linkForOtherPict" href="#"><img className="TurkeyHotelPict fourthTurkeyPict" src={require(`../../../../../Assets/${fourthHotelPicture}`)} alt='' /></a>
              <a className="linkForOtherPict" href="#"><img className="TurkeyHotelPict fifthTurkeyPict" src={require(`../../../../../Assets/${fifthHotelPicture}`)} alt='' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExactHotelComponent;