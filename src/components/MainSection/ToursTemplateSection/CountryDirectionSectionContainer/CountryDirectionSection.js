import React from "react";
import "./CountryDirectionSection.css";
import {useLocation, useParams} from 'react-router-dom';
import {useState, useEffect} from "react";
// import { useSearchParams } from "react-router-dom";

const CountryDirectionSection = (props) => {

    const { direction } = useParams();
    // console.log(useLocation());
    const tour = props.toursTemplate.find(item => item.route === direction);

    let [slide, setSlide] = useState(1);

    let CarouselElem = React.createRef();
    
    useEffect(() => {
        const setAutoSlide = setInterval(() => {
            setSlide(() => {
                CarouselElem.current.style.right = `${slide*20}%`;
                // document.querySelector('.DivForCarousel').style.right = `${slide*20}%`;
                return slide >=2 ? slide = 0 : slide++;
            })
        }, 3000);
        return () => clearInterval(setAutoSlide)
    }, [slide])

    return(
        <div className="CountryDirectionSectionWrap">
            <div className="OuterdivForPicture" route={tour.route} key={tour.id}> 
                <img className="OuterPicture" src={tour.sightseeingPict}/>
            </div>
            <div className="DivForCarousel" ref={CarouselElem}>
            {/* <div className="DivForCarousel">  */}
                <img className="CarouselPicters" src={tour.CarouselImage1}/>
                <img className="CarouselPicters" src={tour.CarouselImage2}/>
                <img className="CarouselPicters" src={tour.CarouselImage3}/>
                <img className="CarouselPicters" src={tour.CarouselImage4}/>
                <img className="CarouselPicters" src={tour.CarouselImage5}/>
                <img className="CarouselPicters" src={tour.CarouselImage6}/>
                <img className="CarouselPicters" src={tour.CarouselImage7}/>
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