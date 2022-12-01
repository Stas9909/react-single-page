import React from "react";
import {addFeedbackActionCreator, updateNewFeedbackTextActionCreator} from "../../Redux/feedbackReducer";
import FeedbackSection from "./FeedbackSection";
import StoreContext from "../../StoreContext";

const FeedbackSectionContainer = () => {

    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().feedbackVar;

                    let addFeedback = () => {
                        store.dispatch(addFeedbackActionCreator());
                    } 

                    let updateNewFeedback =(text) => {
                        store.dispatch(updateNewFeedbackTextActionCreator(text))
                    }

                    return(
                        <FeedbackSection updateNewFeedback = {updateNewFeedback}
                                         addFeedback = {addFeedback}
                                         FeedbackTemplate = {state.FeedbackTemplate}
                                         NewFeedbackText = {state.NewFeedbackText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default FeedbackSectionContainer;