import React, { useState } from 'react'
import {
  HorizontalRule,
  GridContainer,
  FlexContainer,
  Text,
  TextArea,
} from 'components'
import {
  ButtonsShowcase,
  RadioButtonsShowcase,
  CheckboxShowcase,
  NumberInputShowcase,
  LayoutComponentShowcase,
  SelectShowcase,
  TextShowcase,
  LabeledValueShowcase,
  TooltipShowcase,
  ColorShowcase,
  ModalShowcase,
} from './showcases'

export const App = () => {
  const [textAreaValue, setTextAreaValue] = useState<string | undefined>(
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, tempora! '.repeat(
      10,
    ),
  )
  const handleChange = (value: string) => {
    console.log(value)
    setTextAreaValue(value)
  }
  return (
    <div className="App">
      <TextArea value={textAreaValue} onChange={handleChange} />
      <TooltipShowcase />

      <ColorShowcase />

      <HorizontalRule />

      <ButtonsShowcase />
      <HorizontalRule />

      <RadioButtonsShowcase />
      <HorizontalRule />

      <CheckboxShowcase />
      <HorizontalRule />

      <NumberInputShowcase />
      <HorizontalRule />

      <LabeledValueShowcase />
      <HorizontalRule />

      <Text size="large" style={{ marginBottom: '2rem' }}>
        Text showcase:
      </Text>
      <TextShowcase />
      <HorizontalRule />

      <LayoutComponentShowcase />
      <HorizontalRule />

      <SelectShowcase />
      <HorizontalRule />

      <ModalShowcase />
      <HorizontalRule />

      <GridContainer columns={2} gap="1rem">
        <div>1</div>
        <div>2</div>
      </GridContainer>

      <FlexContainer column centered>
        <div>hello</div>
        <div>world</div>
      </FlexContainer>
    </div>
  )
}
