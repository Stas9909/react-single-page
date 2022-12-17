import React from "react";
import {setCountriesActionCreator} from "../../../../Redux/MainSectionReducer";
import CountryDirectionSection from "./CountryDirectionSection";
import {connect} from "react-redux";

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

export default connect(mapStateToProps, mapDispatchToProps) (CountryDirectionSection);