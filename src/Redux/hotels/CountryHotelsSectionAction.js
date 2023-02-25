import axios from "axios";

const setHotelsActionCreator = () => (dispatch, getState) => {
  axios.get("../../data.json")
  .then(response => 
      dispatch({type: "SET_HOTELS", hotelsTemplate: response.data})
  )
  .catch(error => console.log(error))
}

export default setHotelsActionCreator;