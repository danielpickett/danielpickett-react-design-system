import React, { useState } from 'react'
import { RadioButton, RadioButtonGroup } from 'components'

export const App = () => {
  const [color, setColor] = useState<string | null>(null)

  return (
    <div className="App">
      Current color: {color}
      <RadioButtonGroup
        name="color"
        defaultSelected="green"
        valueSelected={color}
        onChange={value => setColor(value as string)}
        layout='horizontal'
      >
        <RadioButton value="red" label="red" />
        <RadioButton value="green" label="green" />
        <RadioButton value="blue" label="blue" />
      </RadioButtonGroup>
    </div>
  )
}
