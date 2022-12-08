import {combineReducers, createStore} from "redux";
import feedbackReducer from "./feedbackReducer";
// import MainSectionReducer from "./MainSectionReducer";

let reducers = combineReducers({
    feedbackVar: feedbackReducer,
    // mainSectionVar: MainSectionReducer,
})

let store = createStore(reducers);

export default store;