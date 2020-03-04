import React, { SyntheticEvent } from 'react'
import './NumberInput.css'

export const NumberInput: React.FunctionComponent<{
  onChange: (arg: number) => void
  value: number
}> = ({ onChange, value }) => {
  const handleOnChange = (event: SyntheticEvent) => {
    
  }
  return (
    <div className="NumberInput">
      <div className="NumberInput__container">
        <input
          type="text"
          onChange={event => handleOnChange(event)}
          className="NumberInput__input"
          value={value}
        />
        <div className="NumberInput__arrows">
          <button className="NumberInput__up-arrow"></button>
          <button className="NumberInput__down-arrow"></button>
        </div>
      </div>
    </div>
  )
}
