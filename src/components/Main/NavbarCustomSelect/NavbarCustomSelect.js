import React from "react";
import "./NavbarCustomSelect.css";

const NavbarCustomSelect = (props) => {
  const { label, optionList, setOptionValue } = props;

  const [showDropdown, setShowDropdown] = React.useState(false);//открывает и закрывает селект
  const [selectedOption, setSelectedOption] = React.useState(optionList[0].options[0].name);//отобр выбранный эл-т по умолч и меняем его при клике

  const openHandler = () => {
    setShowDropdown(!showDropdown)
  }

  const optionHandler = (option) => {
    setSelectedOption(option.name)
    setShowDropdown(false)
    setOptionValue(option.value)
  }

  return (
    <div className="selectWrapper" >
      <label htmlFor="SelectDestination" className="NavText">{label}</label>
      <button type="button" onClick={openHandler} className="NavInput" id="SelectDestination">
        <div className="optionsContainer">
          <span className='selectValue'>{selectedOption}</span>
        </div>
      </button>

      {showDropdown && (
        <div className="selectOptionsWrapper">
          {optionList.map((optgroupObj) => (
            <optgroup className="optgroup selectOption" label={optgroupObj.optgroup} key={optgroupObj.id}>
              {optgroupObj.options.map((optionObj) => (
                <option className="option selectOption" value={optionObj.value} key={optionObj.id} onClick={() => optionHandler(optionObj)}>
                  {optionObj.name}
                </option>
              ))}
            </optgroup>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavbarCustomSelect;