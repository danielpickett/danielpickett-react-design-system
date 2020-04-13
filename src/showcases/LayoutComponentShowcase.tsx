import React from 'react'
import { FlexContainer, Tile } from 'components'

export const LayoutComponentShowcase = () => {
  return (
    <div className="LayoutComponentShowcase">
      <Tile title="This Is the Title for the Tile">
        This is the content of the tile
      </Tile>
      <FlexContainer>
        <Tile title="This Is the Title for the Tile">
          This is the content of the tile
        </Tile>
        <Tile title="This Is the Title for the Tile">
          This is the content of the tile
        </Tile>
      </FlexContainer>
    </div>
  )
}
