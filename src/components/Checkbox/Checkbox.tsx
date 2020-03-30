import React, { ReactNode } from 'react'
import './Checkbox.css'

export const Checkbox: React.FunctionComponent<{
  checked: boolean
  onChange: () => void
  label?: string | ReactNode
  inputId?: string
}> = ({ label, inputId, ...rest }) => {
  return (
    <div className="Checkbox">
      <label>
        <input type="checkbox" id={inputId} {...rest} />
        {label && <span className="Checkbox__label">{label}</span>}
      </label>
    </div>
  )
}
