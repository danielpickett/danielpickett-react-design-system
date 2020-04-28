import React from 'react'
import { Text, GridContainer, Box } from 'components'

export const TextShowcase = () => {
  return (
    <div className="TextShowcase">
      <GridContainer columns={4}>
        <Box>
          <Text lightness="light">Lorem ipsum dolor sit amet</Text>
          <Text lightness="medium">Lorem ipsum dolor sit amet</Text>
          <Text lightness="dark">Lorem ipsum dolor sit amet</Text>
        </Box>

        <Box style={{backgroundColor: 'var(--color-grey-900)'}}>
          <Text overDarkBackground lightness="light">Lorem ipsum dolor sit amet</Text>
          <Text overDarkBackground lightness="medium">Lorem ipsum dolor sit amet</Text>
          <Text overDarkBackground lightness="dark">Lorem ipsum dolor sit amet</Text>
        </Box>

        <Box>
          <Text size="fine-print">Lorem ipsum dolor sit amet</Text>
          <Text size="extra-small">Lorem ipsum dolor sit amet</Text>
          <Text size="small">Lorem ipsum dolor sit amet</Text>
          <Text size="medium">Lorem ipsum dolor sit amet</Text>
          <Text size="large">Lorem ipsum dolor sit amet</Text>
          <Text size="extra-large">Lorem ipsum dolor sit amet</Text>
        </Box>

        <Box style={{backgroundColor: 'var(--color-grey-900)'}}>
          <Text overDarkBackground size="fine-print">Lorem ipsum dolor sit amet</Text>
          <Text overDarkBackground size="extra-small">Lorem ipsum dolor sit amet</Text>
          <Text overDarkBackground size="small">Lorem ipsum dolor sit amet</Text>
          <Text overDarkBackground size="medium">Lorem ipsum dolor sit amet</Text>
          <Text overDarkBackground size="large">Lorem ipsum dolor sit amet</Text>
          <Text overDarkBackground size="extra-large">Lorem ipsum dolor sit amet</Text>
        </Box>
      </GridContainer>
    </div>
  )
}
