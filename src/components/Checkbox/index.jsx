import React from 'react'
import PropTypes from 'prop-types'
import {useSelector} from "react-redux"
import './Checkbox.scss'

export const Checkbox = ({label = 'label wasn\'t provided', toggle}) => {
  const [checked, setChecked] = React.useState(false)
  const {mode} = useSelector(state => state?.mode)

  const styleMode = mode ? 'dark-mode' : 'light-mode'

  const toggleCheckbox = () => {
    setChecked(prev => !prev)
    toggle({type: checked ? 'decrement' : 'increment'})
  }

  return (
      <label
          className={`checkbox ${styleMode}`}
      >
        <input
            className="checkbox__input"
            onChange={() => toggleCheckbox()}
            checked={checked}
            type="checkbox"
        />
        <span className="checkbox__fake-input" aria-hidden/>
        <span className={`checkbox__label ${checked ? 'active' : ''}`.trim()}>
          {label}
        </span>
      </label>
  )
}

//при переносе на typescript удалить бибилотеку prop-types
Checkbox.propTypes = {
  label: PropTypes.string,
}
