import React from 'react'
import { Text } from 'components'

export const TextShowcase = () => {
  return (
    <div className="TextShowcase">
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <div style={{border: 'solid', maxWidth: '200px'}}>
        <Text noWrap>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </div>
    </div>
  )
}
