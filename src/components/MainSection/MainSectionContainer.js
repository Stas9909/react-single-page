import React from "react";
import MainSection from "./MainSection";
import {connect} from "react-redux";
import {setCountriesActionCreator} from "../../Redux/MainSectionReducer";

let mapStateToProps = (dataState) => {
    return {
        toursTemplate: dataState.mainSectionVar.toursTemplate,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCountries: () => {
            dispatch(setCountriesActionCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainSection);
