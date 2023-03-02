import axios from "axios";

// const setHotelsActionCreator = () => (dispatch, getState) => {
// fetch("../../data.json")
//   .then(response => response.json())
//   .then(data =>
//     dispatch({ type: "SET_HOTELS", payload: data.data })
//   )
//   .catch(error => console.log(error))
// }

export const setHotelsActionCreator = () => (dispatch, getState) => {
  axios.get("../../react-single-page/data.json")
  .then(response => 
      dispatch({type: "SET_HOTELS", hotelsTemplate: response.data})
  )
  .catch(error => console.log(error))
}

export const setSearchResultsActionCreator = (searchResults) => ({
  type: "SET_SEARCH_RESULTS",
  searchResults: searchResults,
});

// export default setHotelsActionCreator;