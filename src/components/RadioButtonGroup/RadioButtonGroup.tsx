import React, { ReactElement, ChangeEvent } from 'react'
import './RadioButtonGroup.css'
import { RadioButton } from 'components'

export const RadioButtonGroup = ({
  children,
  name,
  onChange,
}: {
  children: ReactElement[]
  name: string
  defaultSelected: string | number
  valueSelected: string | number | null
  onChange: (
    newSelection: string | number,
    name: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => void
}) => {
  const handleChange = (
    newSelection: string | number,
    name: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    if (onChange) {
      onChange(newSelection, name, event)
    }
  }

  const getRadioButtons = () => {
    const radioButtons = React.Children.map(children, radioButton => {
      const { value, label } = radioButton?.props

      if (radioButton.props.hasOwnProperty('checked')) {
        console.error(
          `When using RadioButton components as children of a RadioButtonGroup
          component, do not use the 'checked' prop of any RadioButton components.`,
        )
      }

      return (
        <RadioButton
          label={label}
          name={name}
          value={value}
          onChange={handleChange}
        />
      )
    })

    return radioButtons
  }

  return <div className="RadioButtonGroup">{getRadioButtons()}</div>
}
