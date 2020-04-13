import React, { FC } from 'react'
import * as CSS from 'csstype'
import './Tile.scss'
import { TitleText } from '../../components'

export const Tile: FC<{
  title?: string
  style?: CSS.Properties
  flex?: [number | undefined, number | undefined, string | undefined]
}> = ({ children, title, style, flex=[] }) => {
  const flexLonghand = {
    flexGrow: flex[0],
    flexShrink: flex[1],
    flexBasis: flex[2]
  }
  return (
    <div className="Tile" style={{...style, ...flexLonghand}}>
      {!!title && (
        <div className="Tile__header">
          <TitleText>{title}</TitleText>
        </div>
      )}
      <div className="Tile__body">{children}</div>
    </div>
  )
}
