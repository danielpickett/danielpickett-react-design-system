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
  ColorShowcase,
} from './showcases'
import { LabeledValueShowcase } from 'showcases/LabeledValueShowcase'
// import { ReactSelectExample } from 'showcases/ReactSelectExample'

export const App = () => {
  return (
    <div className="App">
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


      <Text size="large" style={{marginBottom: '2rem'}}>Text showcase:</Text>
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
