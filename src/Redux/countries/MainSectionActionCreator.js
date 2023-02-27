import axios from "axios";

const setCountriesActionCreator = () => (dispatch, getState) => {
    axios.get("../../../react-single-page/directions.json")
    .then(response => 
        dispatch({type: "SET_COUNTRIES", toursTemplate: response.data})
    )
    .catch(error => console.log(error))
}

export default setCountriesActionCreator;