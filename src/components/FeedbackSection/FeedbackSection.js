import React from "react";
import "./FeedbackSection.css";
import FeedbackCol from "./FeedbackCol/FeedbackCol";

const FeedbackSection = (props) => {
    const FeedbackTemplateElements = props.FeedbackTemplate.map(feedback => <FeedbackCol 
                                    id={feedback.id}
                                    revievLogo={feedback.revievLogo} 
                                    txtReview={feedback.txtReview} 
                                    dateReview={feedback.dateReview}/>)

    let newFeedbackTemplateElements = React.createRef();

    let addFeedback = () => {
        props.addFeedback();
    }

    let updateNewFeedback = () => {
        let text = newFeedbackTemplateElements.current.value;
        // let text = React.createRef().current.value;
        // let text = e.target.value;
        props.updateNewFeedback(text)
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
                                ref = {newFeedbackTemplateElements}/>
                        <button className="FeedbackBtn"
                                onClick={addFeedback}>
                                ADD
                        </button>
                    </div>                 
                </div>
                <div className="divForInput">
                    <input className="InputForMoreProp" type="button" value="показати ще"/>
                </div>
            </div>
        </section>
    )
}

export default FeedbackSection;