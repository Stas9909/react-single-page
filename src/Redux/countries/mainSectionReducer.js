let initialState = []

const mainSectionReducer = (dataState=initialState, action) => {
    switch (action.type) {
        case "SET_COUNTRIES":
            return action.toursTemplate
        default: 
            return dataState 
    }        
}

export default mainSectionReducer;













