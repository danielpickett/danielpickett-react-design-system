import React, { FC, ReactNode, ChangeEvent } from 'react'
import './RadioButton.scss'
import classNames from 'classnames'

export type RadioButtonType = {
  checked?: boolean
  value: string | number
  onChange?: (
    newSelection: string | number,
    name: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => void
  label?: string | ReactNode
  id?: string
  name?: string
}

export const RadioButton: FC<RadioButtonType> = ({
  label,
  onChange,
  value,
  checked,
  name,
}) => {
  const modifierClasses = classNames(' ', {
    'RadioButton--checked': checked,
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange && value && name) {
      onChange(value, name, event)
    }
  }

  return (
    <div className={'RadioButton' + modifierClasses}>
      <label className="RadioButton__wrapper-label">
        <div className="RadioButton__input-wrapper">
          <input
            className="RadioButton__input"
            type="radio"
            onChange={handleChange}
            checked={checked}
            value={value}
            name={name}
          />
        </div>

        {label && <span className="RadioButton__label">{label}</span>}
      </label>
    </div>
  )
}
