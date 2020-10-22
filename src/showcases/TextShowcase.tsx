import React from 'react'
import { Text } from 'components'
import './TextShowcase.scss'

export const TextShowcase = () => {
  const bg = 'grey-050'
  const sizes = ['xxxl', 'xxl', 'xl', 'l', 'm', 's', 'xs'] as const

  return (
    <div className="TextShowcase" style={{ display: 'flex', gap: '2rem' }}>
      <div
        style={{
          backgroundColor: `var(--color-${bg})`,
          display: 'inline-block',
          padding: '2rem',
        }}
      >
        {sizes.map((size, index) => (
          <Text key={index} on={bg} size={size}>
            Hello, world!
          </Text>
        ))}
      </div>
      <div
        style={{
          border: '1px solid var(--color-grey-200)',
          display: 'inline-block',
          padding: '2rem',
        }}
      >
        <Text on="white">Hello, world!</Text>
        <Text on="white" subdued>
          Hello, world!
        </Text>
        <Text on="white" subdued="dangerously">
          Hello, world!
        </Text>
      </div>
      <div
        style={{
          border: '1px solid var(--color-grey-200)',
          display: 'inline-block',
          padding: '2rem',
        }}
      >
        <Text on="white" weight="bold">
          Hello, world!
        </Text>
        <Text on="white">Hello, world!</Text>
        <Text on="white" weight="light">
          Hello, world!
        </Text>
      </div>
      <div
        style={{ backgroundColor: 'var(--color-primary-100)', padding: '2rem' }}
      >
        <Text on="primary-100">Helloooooo</Text>
        <div className="TextShowcase__text">Byeeeee!</div>
      </div>
    </div>
  )
}
