import React from "react";
import "./FeedbackCol.css";
import FBLogo from "../../../Assets/3536394.png";

const FeedbackCol = (props) => {

    return( 
    <div className="FacebookReviewDiv">
        <div className="DivForAva">
            <img className="tourist2" src={props.revievLogo} alt=''/>
        </div>
        <div className="DivForLogoFB">
            <img className="FBLogo" src={FBLogo} alt=''/>
        </div>
        <div className="DivForFeedback">
            <div className="wrap"><p className="ParForFeedback">{props.txtReview}</p>
            <a className="RefForFeedback" href="#"><p className="DivForRef">Ще</p></a>
            </div> 
        </div>
        <div className="DivForDate">
            <p className="ParForDate">{props.dateReview}</p>
        </div>
    </div>)
}

export default FeedbackCol;