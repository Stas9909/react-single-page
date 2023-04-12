import { combineReducers, legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import feedbackReducer from "./feedbackReducer";
import mainSectionReducer from "./countries/mainSectionReducer";
import countryHotelsSectionReducer from "./hotels/countryHotelsSectionReducer";
import searchHotelResultsReducer from "./searchHotel/searchHotelResultsReducer";
import preloaderReducer from "./preloader/preloaderReducer";
import modalReducer from "./modal/modalReducer";

let rootReducer = combineReducers({
  modalVar: modalReducer,
  preloaderVar: preloaderReducer,
  searchHotelResultsVar: searchHotelResultsReducer,
  countryHotelsSectionVar: countryHotelsSectionReducer,
  feedbackVar: feedbackReducer,
  mainSectionVar: mainSectionReducer,
})

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(rootReducer, compose(applyMiddleware(thunk), devTools));

export default store;