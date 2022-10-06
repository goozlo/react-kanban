import React from 'react'
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
        <span className="checkbox__fake-input"/>
        <span className={`checkbox__label ${checked ? 'active' : ''}`.trim()} aria-hidden>
          {label}
        </span>
      </label>
  )
}

