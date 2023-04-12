import React, { useState, useEffect } from "react";
import "./CountryDirectionSection.css";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import setCountriesActionCreator from "../../../../Redux/countries/MainSectionActionCreator";
import ReactDOM from 'react-dom';
import { setModalActionCreator } from "../../../../Redux/modal/modalAction";

const CountryDirectionSection = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);//закрываем модлку(открыта или закрыта)

    const [currentImageUrlIndex, setCurrentImageUrlIndex] = useState(0);//индекс текущей картинки
    const [imageUrlsArr, setImageUrlsArr] = useState([]);//массив ссылок на все картинки

    const [currentImageUrl, setCurrentImageUrl] = useState('');//здесь храним ссылку на картинку

    const dispatch = useDispatch();

    const handleModalClose = () => {
        // setIsModalVisible(false)//закрываем модалку
        dispatch(setModalActionCreator({
            name: '',
            children: null
        }))
    }

    const handleImageClick = (imageUrl, imageUrlsArr) => {
        console.log(imageUrl)
        setCurrentImageUrl(imageUrl);//передаем ссылку на картинку и вешаем ее на кажд img на onClick
        // setIsModalVisible(true);//открываем модалку
        dispatch(setModalActionCreator({
            name: 'openImageModal',
            children: <div className="modalForImage">
                <img className="currentImageInPortal" src={imageUrl} alt="" />
                <button onClick={handleModalClose} className="closePortalButton">X</button>
            </div>
        }))
    }

    const toursTemplate = useSelector(state => state.mainSectionVar);

    useEffect(() => {
        dispatch(setCountriesActionCreator())
    }, [])

    let [slide, setSlide] = useState(1);

    let CarouselElem = React.createRef();

    useEffect(() => {
        if (!isModalVisible && CarouselElem.current?.children.length > 0) {
            const setAutoSlide = setInterval(() => {
                setSlide((slide) => {//в арг передается предыдущее знач slide для того, чтобы можно было его исп внутри функции для вычисления нового значения 
                    const newSlide = slide >= 2 ? 0 : slide + 1;//вычисляем новое значение для того, чтобы не менять значение slide напрямую, а передать его в setSlide
                    CarouselElem.current.style.right = `${newSlide * 20}%`;
                    return newSlide;
                });
            }, 3000);
            return () => clearInterval(setAutoSlide);
        }
    }, [CarouselElem]);

    const { direction } = useParams();
    const tour = toursTemplate.find(item => item.route === direction);
    console.log(tour)
    if (!tour) return null;

    return (
        <div className="CountryDirectionSectionWrap">
            <div className="OuterdivForPicture" route={tour.route} key={tour.id}>
                <img className="OuterPicture" src={require(`../../../../Assets/${tour.sightseeingPict}`)} alt="" />
            </div>
            <div className="DivForCarousel" ref={CarouselElem}>       
                {tour.CarouselImage1 && <img className="CarouselPicters" src={tour.CarouselImage1 ? require(`../../../../Assets/${tour.CarouselImage1}`) : ''} alt=""
                    onClick={() => handleImageClick(require(`../../../../Assets/${tour.CarouselImage1}`))} />}
                {tour.CarouselImage2 && <img className="CarouselPicters" src={require(`../../../../Assets/${tour.CarouselImage2}`)} alt=""
                    onClick={() => handleImageClick(require(`../../../../Assets/${tour.CarouselImage2}`))} />}
                {tour.CarouselImage3 && <img className="CarouselPicters" src={require(`../../../../Assets/${tour.CarouselImage3}`)} alt=""
                    onClick={() => handleImageClick(require(`../../../../Assets/${tour.CarouselImage3}`))} />}
                {tour.CarouselImage4 && <img className="CarouselPicters" src={require(`../../../../Assets/${tour.CarouselImage4}`)} alt=""
                    onClick={() => handleImageClick(require(`../../../../Assets/${tour.CarouselImage4}`))} />}
                {tour.CarouselImage5 && <img className="CarouselPicters" src={require(`../../../../Assets/${tour.CarouselImage5}`)} alt=""
                    onClick={() => handleImageClick(require(`../../../../Assets/${tour.CarouselImage5}`))} />}
                {tour.CarouselImage6 && <img className="CarouselPicters" src={require(`../../../../Assets/${tour.CarouselImage6}`)} alt=""
                    onClick={() => handleImageClick(require(`../../../../Assets/${tour.CarouselImage6}`))} />}
                {tour.CarouselImage7 && <img className="CarouselPicters" src={require(`../../../../Assets/${tour.CarouselImage7}`)} alt=""
                    onClick={() => handleImageClick(require(`../../../../Assets/${tour.CarouselImage7}`))} />}
            </div>
            <div className="GeneralDivForText">
                <div className="wrapForH4">
                    <h4 className="HeaderForCountryName">
                        {tour.HeaderForCountry}
                    </h4>
                </div>
                <div className="wrapForTxt">
                    <p className="ParForCountryDescription">
                        {tour.CountryDescription}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CountryDirectionSection;