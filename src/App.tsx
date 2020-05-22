import React from 'react'
import { HorizontalRule, GridContainer, FlexContainer, Text } from 'components'
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
} from './showcases'

export const App = () => {
  return (
    <div className="App">
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
