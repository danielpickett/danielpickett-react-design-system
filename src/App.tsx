import React from 'react'
import { HorizontalRule, GridContainer } from 'components'
import {
  ButtonsShowcase,
  RadioButtonsShowcase,
  CheckboxShowcase,
  NumberInputShowcase,
  TitleTextShowcase,
  BodyTextShowcase,
  LayoutComponentShowcase,
  SelectShowcase,
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

      <LayoutComponentShowcase />
      <HorizontalRule />

      <SelectShowcase />
      <HorizontalRule />

      {/* <ReactSelectExample /> */}
    </div>
  )
}
