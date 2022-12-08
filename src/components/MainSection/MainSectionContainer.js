import React from "react";
import MainSection from "./MainSection";
import {connect} from "react-redux";
import {setCountriesActionCreator} from "../../Redux/MainSectionReducer";

let mapStateToProps = (datastate) => {
    return {
        toursTemplate: datastate.mainSectionVar.toursTemplate
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCountries: (toursTemplate) => {
            dispatch(setCountriesActionCreator(toursTemplate))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainSection)