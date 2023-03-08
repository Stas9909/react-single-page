import React from "react";
import "./FeedbackSection.css";
import FeedbackCol from "./FeedbackCol/FeedbackCol";
import { useState } from "react";

const FeedbackSection = (props) => {

    let [currentVisibleFeedbacks, setCurrentVisibleFeedbacks] = useState(4);
    const addMoreFeedbacks = () => {
        setCurrentVisibleFeedbacks(currentVisibleFeedbacks + 2)
    }

    const FeedbackTemplateElements = props.FeedbackTemplate.slice(0, currentVisibleFeedbacks).map(feedback => <FeedbackCol
        key={feedback.id}
        revievLogo={feedback.revievLogo}
        txtReview={feedback.txtReview}
        dateReview={feedback.dateReview} />)

    let newFeedbackTemplateElements = React.createRef();

    let addFeedback = () => {
        props.addFeedback();
    }

    let updateNewFeedback = () => {
        let text = newFeedbackTemplateElements.current.value;
        // let text = React.createRef().current.value;
        // let text = e.target.value;
        props.updateNewFeedback(text)// 
    }

    return (
        <section className="FeedbackSection">
            <div className="ContainerDiv">
                <div className="DivForH2">
                    <h2 className="Header">ВІДГУКИ <span>ПРО КОМПАНІЮ</span></h2>
                </div>
                <div className="DivForSectionList">
                    {FeedbackTemplateElements}
                    <div className="DivForAddingFeedback">
                        <textarea className="FeedbackArea"
                            onChange={updateNewFeedback}
                            value={props.NewFeedbackText}
                            ref={newFeedbackTemplateElements} />
                        <button className="FeedbackBtn"
                            onClick={addFeedback}>
                            ADD
                        </button>
                    </div>
                </div>
                <div className="divForInput">
                    <input className={currentVisibleFeedbacks >= props.FeedbackTemplate.length ? "hideFeedbackBtn" : "InputForMoreProp"} onClick={addMoreFeedbacks} type="button" value="показати ще" />
                </div>
            </div>
        </section>
    )
}

export default FeedbackSection;