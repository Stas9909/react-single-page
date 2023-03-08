import axios from "axios";

export const setHotelsActionCreator = () => (dispatch, getState) => {
  axios.get("../../react-single-page/data.json")
    .then(response =>
      dispatch({ type: "SET_HOTELS", hotelsTemplate: response.data })
    )
    .catch(error => console.log(error))
}

