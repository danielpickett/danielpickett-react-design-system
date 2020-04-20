import React from 'react'
import { BodyText, GridContainer, TitleText } from 'components'

export const BodyTextShowcase = () => {
  return (
    <GridContainer columns={2}>
      <div>
        <TitleText>BodyText Size</TitleText>
        <BodyText size="fine-print">This is body text</BodyText>
        <BodyText size="extra-small">This is body text</BodyText>
        <BodyText size="small">This is body text</BodyText>
        <BodyText size="medium">This is body text</BodyText>
        <BodyText size="large">This is body text</BodyText>
      </div>
      <div>
        <TitleText>BodyText Lightness</TitleText>
        <BodyText margin=".5rem 0" lightness="extra-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          temporibus culpa pariatur voluptas praesentium repellendus perferendis
          asperiores reiciendis consectetur amet.
        </BodyText>
        <BodyText margin=".5rem 0" lightness="light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore
          cupiditate nam, fuga illo veniam laudantium aspernatur ipsum itaque
          consequatur?
        </BodyText>
        <BodyText margin=".5rem 0" lightness="medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis!
          Voluptate repellendus ad placeat ex, vitae velit veritatis! Porro,
          iste.
        </BodyText>
        <BodyText margin=".5rem 0" lightness="dark">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam odio
          recusandae aspernatur quibusdam assumenda dolores architecto culpa
          rerum! Debitis, aliquid.
        </BodyText>
      </div>
    </GridContainer>
  )
}
