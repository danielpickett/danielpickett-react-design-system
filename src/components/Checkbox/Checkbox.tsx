import React, { ReactNode, ChangeEvent } from 'react'
import './Checkbox.scss'
import classNames from 'classnames'

export const Checkbox: React.FunctionComponent<{
  checked: boolean
  onChange: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void
  label?: string | ReactNode
  id?: string
}> = ({ checked, onChange, label, id }) => {
  const modifierClasses = classNames(' ', {
    'Checkbox--checked': checked,
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      console.log('checkbox', event.currentTarget.checked)
      onChange(event.currentTarget.checked, event)
    }
  }

  return (
    <div className={'Checkbox' + modifierClasses}>
      <label className={`Checkbox__wrapper-label`}>
        <div className={`Checkbox__input-wrapper`}>
          <input
            className={`Checkbox__input`}
            type="checkbox"
            onChange={handleChange}
            id={id}
            checked={checked}
          />
          <div className="Checkbox__checkmark"></div>
        </div>
        {label && <span className="Checkbox__label">{label}</span>}
      </label>
    </div>
  )
}
