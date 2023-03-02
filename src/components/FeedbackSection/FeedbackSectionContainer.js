import {addFeedbackActionCreator, updateNewFeedbackTextActionCreator} from "../../Redux/feedbackReducer";
import FeedbackSection from "./FeedbackSection";
import {connect} from "react-redux";

let mapStateToProps = (dataState) => {
    return {
        FeedbackTemplate: dataState.feedbackVar.FeedbackTemplate,
        NewFeedbackText: dataState.feedbackVar.NewFeedbackText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewFeedback: (text) => {
            dispatch(updateNewFeedbackTextActionCreator(text));
        },
        addFeedback: () => {
            dispatch(addFeedbackActionCreator());
        }
    }
}

const FeedbackSectionContainer = connect(mapStateToProps, mapDispatchToProps) (FeedbackSection)

export default FeedbackSectionContainer;