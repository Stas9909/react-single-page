let initialState = []

const countryHotelsSectionReducer = (dataState = initialState, action) => {
    switch (action.type) {
        case "SET_HOTELS":
            return action.hotelsTemplate
        case "SET_SEARCH_RESULTS":
            return action.searchResults
        default:
            return dataState;
    }
}

export default countryHotelsSectionReducer;