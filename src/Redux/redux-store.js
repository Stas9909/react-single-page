import {combineReducers, createStore} from "redux";
import feedbackReducer from "./feedbackReducer"

let reducers = combineReducers({
    feedbackVar: feedbackReducer
})

let store = createStore(reducers);

export default store;