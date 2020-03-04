import React, { FormEvent, useState } from 'react'
import './NumberInput.css'

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
    console.log('increment', increment)
    onChange(value + increment)
  }

  return (
    <div className="NumberInput">
      <div className="NumberInput__container">
        <input
          type="text"
          onChange={event => handleOnChange(event)}
          className="NumberInput__input"
          value={isEmpty ? '' : value}
          placeholder={isEmpty ? value.toString() : ''}
          onBlur={() => setIsEmpty(false)}
        />
        <div className="NumberInput__arrows">
          <button
            className="NumberInput__up-arrow"
            onClick={() => handleIncrement(step)}
          ></button>
          <button
            className="NumberInput__down-arrow"
            onClick={() => handleIncrement(-step)}
          ></button>
        </div>
      </div>
    </div>
  )
}
