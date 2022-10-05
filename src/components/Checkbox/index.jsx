import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.scss'

export const Checkbox = (data) => {
  const {label = 'label wasn\'t provided', mode = 'dark'} = data
  const [checked, setChecked] = React.useState(false)

  //todo: позже решить куда убрать эту штуку
  const darkStyle = {background: '#20212C', color: '#FFF'}
  const lightStyle = {background: '#F4F7FD', color: '#000112'}


  return (
      <label
          className="checkbox"
          style={mode === 'dark' ? darkStyle : lightStyle}
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

//при переносе на typescript удалить бибилотеку prop-types
Checkbox.propTypes = {
  label: PropTypes.string,
  mode: PropTypes.oneOf(['dark', 'light'])
}