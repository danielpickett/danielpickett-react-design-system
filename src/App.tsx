import React, { useState, useEffect } from 'react'
import {
  RadioButton,
  RadioButtonGroup,
  Checkbox,
  Button,
  NumberInput,
} from 'components'

export const App = () => {
  const [color, setColor] = useState<string | null>(null)
  const [number, setNumber] = useState<number>(0)
  const [isEnchanted, setIsEnchanted] = useState(false)
  const [isCursed, setIsCursed] = useState(false)

  useEffect(() => {
    console.log(isEnchanted)
  })

  return (
    <div className="App">
      <Button onClick={() => console.log('Button Clicked')}>Click Me</Button>
      <br />
      <br />
      <br />
      Color: {color || 'none'}
      <RadioButtonGroup
        name="color"
        defaultSelected="green"
        valueSelected={color}
        onChange={value => setColor(value as string)}
        layout="horizontal"
      >
        <RadioButton value="red" label="red" />
        <RadioButton value="green" label="green" />
        <RadioButton value="blue" label="blue" />
      </RadioButtonGroup>
      <br />
      <br />
      <br />
      Enchanted: {isEnchanted ? 'true' : 'false'}
      <br />
      Cursed: {isCursed ? 'true' : 'false'}
      <Checkbox
        checked={isEnchanted}
        onChange={checked => setIsEnchanted(checked)}
        label="Make enchanted"
      />
      <Checkbox
        checked={isCursed}
        onChange={checked => setIsCursed(checked)}
        label="Make cursed"
      />
      <br />
      <br />
      <br />
      <NumberInput value={number} onChange={v => setNumber(v)} />
    </div>
  )
}
