export const setSearchResultsActionCreator = (searchResults) => ({
  type: "SET_SEARCH_RESULTS",
  searchResults: searchResults,
});

export const clearSearchResultsActionCreator = () => ({
  type: 'CLEAR_SEARCH_RESULTS',
});