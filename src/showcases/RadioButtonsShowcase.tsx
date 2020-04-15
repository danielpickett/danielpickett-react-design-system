import React, { useState } from 'react'
import { RadioButton, RadioButtonGroup } from 'components'

export const RadioButtonsShowcase = () => {
  const [color, setColor] = useState<string | null>(null)

  return (
    <div className="RadioButtonsShowcase">
            Color: {color || 'none'}
      <RadioButtonGroup
        name="color"
        defaultSelected="green"
        valueSelected={color}
        onChange={(value) => setColor(value as string)}
        layout="horizontal"
      >
        <RadioButton value="red" label="red" />
        <RadioButton value="green" label="green" />
        <RadioButton value="blue" label="blue" />
      </RadioButtonGroup>
    </div>
  )
}