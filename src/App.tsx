import React from 'react'
import { HorizontalRule } from 'components'
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

      <TitleTextShowcase />
      <BodyTextShowcase />
      <HorizontalRule />

      <LayoutComponentShowcase />
      <HorizontalRule />

      <SelectShowcase />
      <HorizontalRule />

      {/* <ReactSelectExample /> */}
    </div>
  )
}
