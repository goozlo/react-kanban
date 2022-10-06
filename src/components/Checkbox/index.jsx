import React from 'react'
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
        <span className={`checkbox__label ${checked ? 'active' : ''}`} aria-hidden>
          {label}
        </span>
      </label>
  )
}

