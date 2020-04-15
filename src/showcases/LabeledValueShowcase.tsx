import React from 'react'
import { LabeledValue, FlexContainer } from 'components'

export const LabeledValueShowcase = () => {
  return (
    <FlexContainer>
      <LabeledValue label="label" value="value" />
      <LabeledValue
        label="label"
        value="value"
        onClick={(e) => console.log('clicked', e)}
      />
    </FlexContainer>
  )
}
