import React, { MouseEvent } from 'react'
import './LabeledValue.scss'

export const LabeledValue: React.FunctionComponent<{
  label: string
  value: string
  prefix?: string
  suffix?: string
  onClick?: (event?:MouseEvent) => void
}> = ({ label, value, prefix, suffix, onClick }) => {

  const handleClick = (event: MouseEvent) => {
    if (onClick) {
      onClick(event)
    }
  }
  return (
    <div className="LabeledValue">
      <div className="LabeledValue__label">{label}</div>
      <div
        className={`LabeledValue__value ${
          onClick ? 'LabeledValue__value--clickable' : ''
        }`}
        onClick={handleClick}
      >
        {prefix && <span className="LabeledValue__prefix">{prefix}</span>}
        <span>{value}</span>
        {suffix && <span className="LabeledValue__suffix">{suffix}</span>}
      </div>
    </div>
  )
}
