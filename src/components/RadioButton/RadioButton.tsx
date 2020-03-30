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
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange && value && name) {
      onChange(value, name, event)
    }
  }
  const prefix = 'RadioButton'
  const wrapperClasses = classNames(prefix, {
    [`${prefix}--is-checked`]: checked,
  })

  return (
    <div className={wrapperClasses}>
      <label className={`${prefix}__wrapper-label`}>
        <div className={`${prefix}__input-wrapper`}>
          <input
            className={`${prefix}__input`}
            type="radio"
            onChange={handleChange}
            checked={checked}
            value={value}
            name={name}
          />
        </div>

        {label && <span className={`${prefix}__label`}>{label}</span>}
      </label>
    </div>
  )
}
