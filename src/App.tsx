import React, { useState } from 'react'
import { RadioButton, RadioButtonGroup } from 'components'

export const App = () => {
  const [color, setColor] = useState<string | null>(null)

  // const handleChangeX = (e: ChangeEvent<HTMLInputElement>) => {
  //   setColor(e.target.value)
  // }

  const handleColorChange = (value: string | number | null) => {
    setColor(value as string)
  }

  return (
    <div className="App">

      Current color: {color}
      <RadioButtonGroup
        name="color"
        defaultSelected="green"
        valueSelected={color}
        onChange={handleColorChange}
      >
        <RadioButton
          value="red"
          label="red"
        />
        <RadioButton
          value="green"
          label="green"
        />
        <RadioButton
          value="blue"
          label="blue"
        />
      </RadioButtonGroup>
    </div>
  )
}
