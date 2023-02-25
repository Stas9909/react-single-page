import axios from "axios";

const setCountriesActionCreator = () => (dispatch, getState) => {
    axios.get("../../directions.json")
    .then(response => 
        dispatch({type: "SET_COUNTRIES", toursTemplate: response.data})
    )
    .catch(error => console.log(error))
}

export default setCountriesActionCreator;