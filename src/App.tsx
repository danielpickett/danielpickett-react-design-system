import React from 'react'
import { HorizontalRule, GridContainer, FlexContainer } from 'components'
import {
  ButtonsShowcase,
  RadioButtonsShowcase,
  CheckboxShowcase,
  NumberInputShowcase,
  TitleTextShowcase,
  BodyTextShowcase,
  LayoutComponentShowcase,
  SelectShowcase,
  TextShowcase,
} from './showcases'
import { LabeledValueShowcase } from 'showcases/LabeledValueShowcase'
// import { ReactSelectExample } from 'showcases/ReactSelectExample'

export const App = () => {
  return (
    <div className="App">
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

      <GridContainer columns={2} gap="2rem">
        <TitleTextShowcase />
        <BodyTextShowcase />
      </GridContainer>
      <HorizontalRule />

      <TextShowcase />
      <HorizontalRule />

      <LayoutComponentShowcase />
      <HorizontalRule />

      <SelectShowcase />
      <HorizontalRule />

      <GridContainer columns={2} columnGap="2rem" rowGap="3rem">
        <div>1</div>
        <div>2</div>
      </GridContainer>

      <FlexContainer column centered>
        <div>hello</div>
        <div>world</div>
      </FlexContainer>

      {/* <ReactSelectExample /> */}
    </div>
  )
}
