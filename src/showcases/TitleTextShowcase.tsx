import React from 'react'
import { TitleText, GridContainer } from 'components'

export const TitleTextShowcase = () => {
  return (
    <GridContainer columns={2}>
      <div className="TitleTextShowcase">
        <TitleText size="fine-print">This is Title Text</TitleText>
        <TitleText size="extra-small">This is Title Text</TitleText>
        <TitleText size="small">This is Title Text</TitleText>
        <TitleText size="medium">This is Title Text</TitleText>
        <TitleText size="large">This is Title Text</TitleText>
        <TitleText size="extra-large">This is Title Text</TitleText>
      </div>
    </GridContainer>
  )
}
