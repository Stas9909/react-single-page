const initialState = {
  children: null,
  name: '',
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MODAL":
      return action.payload;
    default:
      return state;
  }
}

export default modalReducer;