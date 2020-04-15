import React, { FormEvent, useState } from 'react'
import './NumberInput.scss'

export const NumberInput: React.FunctionComponent<{
  onChange: (arg: number) => void
  value: number
  step?: number
  // max?: number
  // min?: number
}> = ({ onChange, value, step = 1 }) => {
  const [isEmpty, setIsEmpty] = useState(false)

  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    const regex = /[^.0-9]+/g

    if (newValue.match(regex)) {
      return
    } else if (newValue === '') {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
      onChange(parseFloat(newValue))
    }
  }

  const handleIncrement = (increment: number) => {
    onChange(value + increment)
  }

  return (
    <div className="NumberInput" >
      <div className="NumberInput__container">
        <input
          type="text"
          onChange={event => handleOnChange(event)}
          className="NumberInput__input"
          value={isEmpty ? '' : value}
          placeholder={isEmpty ? value.toString() : ''}
          onBlur={() => setIsEmpty(false)}
        />
        <div className="NumberInput__buttons">
          <button
            className="NumberInput__up-button"
            onClick={() => handleIncrement(step)}
          >
            <div className="NumberInput__up-arrow"></div>
          </button>
          <button
            className="NumberInput__down-button"
            onClick={() => handleIncrement(-step)}
          >
            <div className="NumberInput__down-arrow"></div>
          </button>
        </div>
      </div>
    </div>
  )
}
