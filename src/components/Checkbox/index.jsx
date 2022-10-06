import React from 'react'
import PropTypes from 'prop-types'
import {useSelector} from "react-redux"
import './Checkbox.scss'

export const Checkbox = ({label = 'label wasn\'t provided'}) => {
  const [checked, setChecked] = React.useState(false)
  const {mode} = useSelector(state => state?.mode)

  const styleMode = mode ? 'dark-mode' : 'light-mode'

  return (
      <label
          className={`checkbox ${styleMode}`}
          htmlFor="checkbox"
      >
        <input
            className="checkbox__input"
            onChange={() => setChecked(prev => !prev)}
            checked={checked}
            id="checkbox"
            type="checkbox"
        />
        <span className="checkbox__fake-input"/>
        <span className={`checkbox__label ${checked ? 'active' : ''}`.trim()} aria-hidden>
          {label}
        </span>
      </label>
  )
}

//при переносе на typescript удалить бибилотеку prop-types
Checkbox.propTypes = {
  label: PropTypes.string,
  mode: PropTypes.oneOf(['dark', 'light'])
}
