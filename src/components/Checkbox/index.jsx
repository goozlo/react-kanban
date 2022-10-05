import React from 'react'
import './Checkbox.scss'

const Checkbox = (data) => {
  const {label = 'label wasn\'t provided', theme = 'dark'} = data
  const [checked, setChecked] = React.useState(false)

  //todo: позже решить куда убрать эту штуку
  const darkStyle = {background: '#20212C', color: '#FFF'}
  const lightStyle = {background: '#F4F7FD', color: '#000112'}


  return (
      <label
          className="checkbox"
          style={theme === 'dark' ? darkStyle : lightStyle}
          htmlFor="checkbox"
      >
        <input
            className="checkbox__input"
            checked={checked}
            id="checkbox"
            type="checkbox"
            onChange={() => setChecked(!checked)}
        />
        <span className="checkbox__fake-input"/>
        <span className="checkbox__label"
              style={checked ? {opacity: .5, textDecoration: 'line-through'} : {}}
        >
          {label}
        </span>
      </label>
  )
};

export default Checkbox