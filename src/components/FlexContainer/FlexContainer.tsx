import React, { ReactNode } from 'react'
import './FlexContainer.scss'
import * as CSS from 'csstype'

export const FlexContainer = ({
  align,
  justify,
  style,
  padding,
  margin,
  children,
}: {
  align?: 'baseline' | 'center' | 'end' | 'start' | 'stretch'
  justify?: 'around' | 'between' | 'evenly' | 'center' | 'end' | 'start'
  padding?: string
  margin?: string
  style?: CSS.Properties
  children: ReactNode
}) => {
  const styles: CSS.Properties = {
    ...style,
    alignItems: align,
    justifyContent: justify,
  }

  return (
    <div
      className="FlexContainer"
      style={{ ...styles, padding: padding, margin: margin }}
    >
      {children}
    </div>
  )
}
