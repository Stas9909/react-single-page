import axios from "axios";

const setCountriesActionCreator = () => (dispatch, getState) => {
    dispatch({ type: "SET_IS_LOADING", payload: true })//показать preloader

    axios.get("../../react-single-page/directions.json")
        .then(response => {
            // setTimeout(() => {
                dispatch({ type: "SET_COUNTRIES", toursTemplate: response.data })
                dispatch({ type: "SET_IS_LOADING", payload: false })
            // }, 500)
        })
        .catch(error => console.log(error))
}

export default setCountriesActionCreator;