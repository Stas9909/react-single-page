import { addFeedbackActionCreator, updateNewFeedbackTextActionCreator } from "../../Redux/feedbackReducer";
import FeedbackSection from "./FeedbackSection";
import { connect } from "react-redux";
import { setIsLoadingActionCreator } from "../../Redux/preloader/preloaderAction";

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
            dispatch(setIsLoadingActionCreator(true));//preloader
            setTimeout(() => {
                dispatch(addFeedbackActionCreator());
                dispatch(setIsLoadingActionCreator(false));//preloader
            }, 500)
        }
    }
}

const FeedbackSectionContainer = connect(mapStateToProps, mapDispatchToProps)(FeedbackSection)

export default FeedbackSectionContainer;