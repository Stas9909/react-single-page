export const setSearchResultsActionCreator = (searchResults) => ({
  type: "SET_SEARCH_RESULTS",
  searchResults: searchResults,
});

//При отрисовике, в результате поиска, массива searchResults и дальнейшем клике на navLink для перехода на другую страну переход не осуществляется, т.к. в массиве searchResults остаются предыдущие данные (массви не обновляется), поэтому при клике на navLink, нужно очищать массив searchResults
export const clearSearchResultsActionCreator = () => ({
  type: 'CLEAR_SEARCH_RESULTS',
});