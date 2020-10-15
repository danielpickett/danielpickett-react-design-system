import React from 'react'
import './TextColors.scss'
import { TextSample } from '../TextSample'

export const TextColors = ({
  swNode,
  scale,
  on,
  wash,
}: {
  swNode: React.RefObject<HTMLDivElement>
  scale: string
  on: string
  wash?: string
}) => {
  const colorVar = `text-on-${on}${wash ? `-${wash}` : ''}--color-${scale}`
  return (
    <div
      className="TextColors"
      style={{
        borderLeftColor: `var(${colorVar})`,
      }}
    >
      <TextSample swatchRef={swNode} color={colorVar} />
      <TextSample swatchRef={swNode} color={colorVar + '--subdued'} />
      <TextSample
        swatchRef={swNode}
        color={colorVar + '--dangerously-subdued'}
      />
    </div>
  )
}
