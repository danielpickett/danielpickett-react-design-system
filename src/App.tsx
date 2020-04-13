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
import { ReactSelectExample } from 'showcases/ReactSelectExample'

// import Select, { ValueType } from 'react-select'

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
