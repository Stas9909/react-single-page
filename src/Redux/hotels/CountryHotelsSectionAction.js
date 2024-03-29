import axios from "axios";

export const setHotelsActionCreator = () => (dispatch, getState) => {
  dispatch({ type: "SET_IS_LOADING", payload: true })//показать preloader

  axios.get("../../react-single-page/data.json")
    .then(response => {
      const currentCountryHotels = response.data;
      setTimeout(() => {
        dispatch({ type: "SET_HOTELS", hotelsTemplate: currentCountryHotels })
        dispatch({ type: "SET_IS_LOADING", payload: false })//спрятать preloader
      }, 300)
    })
    .catch(error => console.log(error))
}
