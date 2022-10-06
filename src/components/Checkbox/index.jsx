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
}

