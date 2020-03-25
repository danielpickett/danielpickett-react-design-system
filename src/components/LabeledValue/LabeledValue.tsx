import React from 'react'
import './LabeledValue.css'

export const LabeledValue: React.FunctionComponent<{
  label: string
  value: string
  prefix?: string
  suffix?: string
}> = ({ label, value, prefix, suffix}) => {
  return (
    <div className="LabeledValue">
      <div className="LabeledValue__label">{label}</div>
      <div className="LabeledValue__value">
        {prefix && <span className="LabeledValue__prefix">{prefix}</span>}
        <span>{value}</span>
        {suffix && <span className="LabeledValue__suffix">{suffix}</span>}
      </div>
    </div>
  )
}
