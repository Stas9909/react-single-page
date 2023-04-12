import React, { useEffect, useState } from "react";
import "./ExactHotelComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { setHotelsActionCreator } from "../../../../Redux/hotels/CountryHotelsSectionAction";
import Preloader from "../../../Preloader/Preloader";
import { setIsLoadingActionCreator } from "../../../../Redux/preloader/preloaderAction";
import ReactDOM from 'react-dom';

const ExactHotelComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);//закрываем модлку(открыта или закрыта)
  const handleModalClose = () => {
    setIsModalVisible(false)
  }

  const [currentImageUrl, setCurrentImageUrl] = useState('');//здесь храним ссылку на картинку
  const handleImageClick = (imageUrl) => {
    setCurrentImageUrl(imageUrl);//передаем ссылку на картинку для отображения в портале (в модалке)
    setIsModalVisible(true)//открываем модалку
  };

  // const { id } = useParams();
  const {state: { id}} = useLocation()

  const dispatch = useDispatch();
  const hotelsList = useSelector(state => state.countryHotelsSectionVar);
  const isLoading = useSelector(state => state.preloaderVar.isLoading);

  const hotelsListArray = Object.values(hotelsList).flatMap(hotel => hotel);

  useEffect(() => {
    dispatch(setIsLoadingActionCreator(true));//показываем прелоадер
    setTimeout(() => {
      dispatch(setHotelsActionCreator())
      dispatch(setIsLoadingActionCreator(false));//скрываем прелоадер
    }, 300)
  }, [])

  const certainHotel = hotelsListArray.find(hotel => hotel.id === id)
  if (!certainHotel) return null;
  const { hotelTitleBackground, firstHotelPicture, secondHotelPicture, thirdHotelPicture, fourthHotelPicture, fifthHotelPicture, innerHotelName, innerResortName } = certainHotel;

  return (
    <div className="exactHotelComponent" key={certainHotel.id}>
      {isLoading ? <Preloader /> :
        <div className="divForHotelPictures" style={{ backgroundImage: `url(${require('../../../../Assets/' + hotelTitleBackground)})` }}>
          <div className="transparentDivInsidePict">
            <div className="divForHotelName">
              <span className="spanForHtlName">
                <h1 className="hotelName">{innerHotelName}</h1>
                <h2 className="resortName">{innerResortName}</h2>
              </span>
            </div>
            <div className="divForMorePict">
              <div className="wrapperForHtlPict">
                <img className="TurkeyHotelPict firstTurkeyPict" src={require(`../../../../Assets/${firstHotelPicture}`)} alt='' onClick={() => handleImageClick(require(`../../../../Assets/${firstHotelPicture}`))} />
                <img className="TurkeyHotelPict secondTurkeyPict" src={require(`../../../../Assets/${secondHotelPicture}`)} alt='' onClick={() => handleImageClick(require(`../../../../Assets/${secondHotelPicture}`))} />
                <img className="TurkeyHotelPict thirdTurkeyPict" src={require(`../../../../Assets/${thirdHotelPicture}`)} alt='' onClick={() => handleImageClick(require(`../../../../Assets/${thirdHotelPicture}`))} />
                <img className="TurkeyHotelPict fourthTurkeyPict" src={require(`../../../../Assets/${fourthHotelPicture}`)} alt='' onClick={() => handleImageClick(require(`../../../../Assets/${fourthHotelPicture}`))} />
                <img className="TurkeyHotelPict fifthTurkeyPict" src={require(`../../../../Assets/${fifthHotelPicture}`)} alt='' onClick={() => handleImageClick(require(`../../../../Assets/${fifthHotelPicture}`))} />
                {isModalVisible && 
                (ReactDOM.createPortal(//1-й аргумент - то, что мы хотим вставить в DOM
                  <div className="modalForImage">
                    <img className="currentImageInPortal" src={currentImageUrl} alr="" />
                    <button onClick={handleModalClose} className="closePortalButton">X</button>
                  </div>,
                  document.body//2-й аргумент - DOM эл-нт, в кот мы хотим вставить наш портал
                ))}
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default ExactHotelComponent;