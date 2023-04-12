let initialState = []

const searchHotelResultsReducer = (dataState = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return action.searchResults
    case 'CLEAR_SEARCH_RESULTS'://очищаем массив searchResults для того, чтобы при переходе на другую страну, массив searchResults очищался
      return [];
    default:
      return dataState;
  }
}

export default searchHotelResultsReducer;