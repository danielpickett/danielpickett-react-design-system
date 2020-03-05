import React from 'react'
import './LabelValuePair.css'

export const LabelValuePair: React.FunctionComponent<{
  label: string
  value: string
  prefix?: string
  suffix?: string
}> = ({ label, value, prefix, suffix}) => {
  return (
    <div className="LabelValuePair">
      <div className="LabelValuePair__label">{label}</div>
      <div className="LabelValuePair__value">
        {prefix && <span className="LabelValuePair__prefix">{prefix}</span>}
        <span>{value}</span>
        {suffix && <span className="LabelValuePair__suffix">{suffix}</span>}
      </div>
    </div>
  )
}
