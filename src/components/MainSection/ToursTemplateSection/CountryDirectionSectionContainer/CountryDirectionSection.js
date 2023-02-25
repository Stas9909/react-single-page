import React, { useState, useEffect } from "react";
import "./CountryDirectionSection.css";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import setCountriesActionCreator from "../../../../Redux/countries/MainSectionActionCreator";

const CountryDirectionSection = () => {
    const dispatch = useDispatch();
    const toursTemplate = useSelector(state => state.mainSectionVar);
    console.log(toursTemplate)

    useEffect(() => {
        dispatch(setCountriesActionCreator())
        console.log(CarouselElem.current);
    }, [])

    const { direction } = useParams();
    console.log(direction)
    const tour = toursTemplate.find(item => item.route === direction);

    let [slide, setSlide] = useState(1);

    let CarouselElem = React.createRef();

    // useEffect(() => {
    //     const setAutoSlide = setInterval(() => {
    //         setSlide(() => {
    //             CarouselElem.current.style.right = `${slide*20}%`;
    //             return slide >=2 ? slide = 0 : slide++;
    //         })
    //     }, 3000);
    //     return () => clearInterval(setAutoSlide)
    // }, [slide])

    useEffect(() => {
        if (CarouselElem.current.children.length > 0) {
            const setAutoSlide = setInterval(() => {
                setSlide((slide) => {
                    const newSlide = slide >= 2 ? 0 : slide + 1;
                    CarouselElem.current.style.right = `${newSlide * 20}%`;
                    return newSlide;
                });
            }, 3000);
            return () => clearInterval(setAutoSlide);
        }
    }, [CarouselElem]);

    return (
        <div className="CountryDirectionSectionWrap">
            <div className="OuterdivForPicture" route={tour.route} key={tour.id}>
                <img className="OuterPicture" src={require(`../../../../Assets/${tour.sightseeingPict}`)} alt="" />
            </div>
            <div className="DivForCarousel" ref={CarouselElem}>
                {tour.CarouselImage1 && <img className="CarouselPicters" src={tour.CarouselImage1 ? require(`../../../../Assets/${tour.CarouselImage1}`) : ''} alt="" />}
                {tour.CarouselImage2 && <img className="CarouselPicters" src={require(`../../../../Assets/${tour.CarouselImage2}`)} alt="" />}
                {tour.CarouselImage3 && <img className="CarouselPicters" src={require(`../../../../Assets/${tour.CarouselImage3}`)} alt="" />}
                {tour.CarouselImage4 && <img className="CarouselPicters" src={require(`../../../../Assets/${tour.CarouselImage4}`)} alt="" />}
                {tour.CarouselImage5 && <img className="CarouselPicters" src={require(`../../../../Assets/${tour.CarouselImage5}`)} alt="" />}
                {tour.CarouselImage6 && <img className="CarouselPicters" src={require(`../../../../Assets/${tour.CarouselImage6}`)} alt="" />}
                {tour.CarouselImage7 && <img className="CarouselPicters" src={require(`../../../../Assets/${tour.CarouselImage7}`)} alt="" />}
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