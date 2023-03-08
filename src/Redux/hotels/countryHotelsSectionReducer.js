let initialState = []

const countryHotelsSectionReducer = (dataState = initialState, action) => {
    switch (action.type) {
        case "SET_HOTELS":
            return action.hotelsTemplate
        default:
            return dataState;
    }
}

export default countryHotelsSectionReducer;