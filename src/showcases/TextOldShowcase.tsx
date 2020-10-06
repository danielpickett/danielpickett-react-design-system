import React from 'react'
import { TextOld, GridContainer, Box } from 'components'

export const TextOldShowcase = () => {
  return (
    <div className="TextOldShowcase">
      <GridContainer columns={4}>
        <Box>
          <TextOld lightness="light">Lorem ipsum dolor sit amet</TextOld>
          <TextOld lightness="medium">Lorem ipsum dolor sit amet</TextOld>
          <TextOld lightness="dark">Lorem ipsum dolor sit amet</TextOld>
        </Box>

        <Box style={{ backgroundColor: 'var(--color-grey-900)' }}>
          <TextOld overDarkBackground lightness="light">
            Lorem ipsum dolor sit amet
          </TextOld>
          <TextOld overDarkBackground lightness="medium">
            Lorem ipsum dolor sit amet
          </TextOld>
          <TextOld overDarkBackground lightness="dark">
            Lorem ipsum dolor sit amet
          </TextOld>
        </Box>

        <Box>
          <TextOld size="fine-print">Lorem ipsum dolor sit amet</TextOld>
          <TextOld size="extra-small">Lorem ipsum dolor sit amet</TextOld>
          <TextOld size="small">Lorem ipsum dolor sit amet</TextOld>
          <TextOld size="medium">Lorem ipsum dolor sit amet</TextOld>
          <TextOld size="large">Lorem ipsum dolor sit amet</TextOld>
          <TextOld size="extra-large">Lorem ipsum dolor sit amet</TextOld>
        </Box>

        <Box style={{ backgroundColor: 'var(--color-grey-900)' }}>
          <TextOld overDarkBackground size="fine-print">
            Lorem ipsum dolor sit amet
          </TextOld>
          <TextOld overDarkBackground size="extra-small">
            Lorem ipsum dolor sit amet
          </TextOld>
          <TextOld overDarkBackground size="small">
            Lorem ipsum dolor sit amet
          </TextOld>
          <TextOld overDarkBackground size="medium">
            Lorem ipsum dolor sit amet
          </TextOld>
          <TextOld overDarkBackground size="large">
            Lorem ipsum dolor sit amet
          </TextOld>
          <TextOld overDarkBackground size="extra-large">
            Lorem ipsum dolor sit amet
          </TextOld>
        </Box>
      </GridContainer>
      <GridContainer>
        <Box>
          <TextOld lightness="light">Lorem ipsum dolor sit amet</TextOld>
          <TextOld lightness="medium">Lorem ipsum dolor sit amet</TextOld>
          <TextOld lightness="dark">Lorem ipsum dolor sit amet</TextOld>
        </Box>

        <Box style={{ backgroundColor: 'var(--color-success-900)' }}>
          <TextOld overDarkBackground lightness="light">
            Lorem ipsum dolor sit amet
          </TextOld>
          <TextOld overDarkBackground lightness="medium">
            Lorem ipsum dolor sit amet
          </TextOld>
          <TextOld overDarkBackground lightness="dark">
            Lorem ipsum dolor sit amet
          </TextOld>
        </Box>

      </GridContainer>
    </div>
  )
}
