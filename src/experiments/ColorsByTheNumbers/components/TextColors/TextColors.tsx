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
}) => (
  <div
    className="TextColors"
    style={{
      borderLeft: `.125rem solid var(--text-color-${scale}-regular-on-${on}${
        wash ? `-${wash}` : ''
      })`,
    }}
  >
    <TextSample
      swatchRef={swNode}
      color={`text-color-${scale}-regular-on-${on}${wash ? `-${wash}` : ''}`}
    />
    <TextSample
      swatchRef={swNode}
      color={`text-color-${scale}-subdued-on-${on}${wash ? `-${wash}` : ''}`}
    />
    <TextSample
      swatchRef={swNode}
      color={`text-color-${scale}-dangerously-subdued-on-${on}${
        wash ? `-${wash}` : ''
      }`}
    />
  </div>
)
