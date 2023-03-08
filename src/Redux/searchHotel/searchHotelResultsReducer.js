let initialState = []

const searchHotelResultsReducer = (dataState = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return action.searchResults
    default:
      return dataState;
  }
}

export default searchHotelResultsReducer;