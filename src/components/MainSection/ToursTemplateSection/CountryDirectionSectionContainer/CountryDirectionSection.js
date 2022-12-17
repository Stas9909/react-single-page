import React from "react";
import "./CountryDirectionSection.css";
import {useLocation, useParams} from 'react-router-dom';
// import { useSearchParams } from "react-router-dom";

const CountryDirectionSection = (props) => {
    const { direction } = useParams();
    // console.log(useLocation());
    console.log(direction);
    const tour = props.toursTemplate.find(item => item.route === direction);

    return(
        <div className="CountryDirectionSectionWrap">
            <div className="OuterdivForPicture" route={tour.route} key={tour.id}> 
                <img className="OuterPicture" src={tour.sightseeingPict}/>
            </div>
            <div className="DivForCarousel">
                <img className="CarouselPicters" src={tour.CarouselImage1}/>
                <img className="CarouselPicters" src={tour.CarouselImage2}/>
                <img className="CarouselPicters" src={tour.CarouselImage3}/>
                <img className="CarouselPicters" src={tour.CarouselImage4}/>
                <img className="CarouselPicters" src={tour.CarouselImage5}/>
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