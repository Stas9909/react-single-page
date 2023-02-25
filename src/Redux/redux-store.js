import {combineReducers, legacy_createStore as createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import feedbackReducer from "./feedbackReducer";
import mainSectionReducer from "./countries/mainSectionReducer";
import countryHotelsSectionReducer from "./hotels/countryHotelsSectionReducer";

let rootReducer = combineReducers({
    countryHotelsSectionVar: countryHotelsSectionReducer,
    feedbackVar: feedbackReducer,
    mainSectionVar: mainSectionReducer,
})

let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;