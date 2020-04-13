import React from 'react'
import { BodyText } from 'components'

export const BodyTextShowcase = () => {
  return (
    <div className="BodyTextShowcase">
      <BodyText size="fine">This is body text</BodyText>
      <BodyText size="extra-small">This is body text</BodyText>
      <BodyText size="small">This is body text</BodyText>
      <BodyText size="medium">This is body text</BodyText>
      <BodyText size="large">This is body text</BodyText>
    </div>
  )
}