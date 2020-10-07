import React from 'react'
import { Text } from 'components'

export const TextShowcase = () => {
  const bg = 'grey-050'

  return (
    <div className="TextShowcase">
      <div
        style={{
          backgroundColor: `var(--color-${bg})`,
          display: 'inline-block',
          padding: '2rem',
        }}
      >
        <Text on={bg} subdued>Hello, world!</Text>
      </div>
    </div>
  )
}
