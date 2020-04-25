import React, { ReactNode } from 'react'
import './FlexContainer.scss'
import * as CSS from 'csstype'
import classNames from 'classnames'

export const FlexContainer = ({
  column = false,
  centered,
  align,
  justify,
  style,
  wrap,
  padding,
  margin,
  children,
  className,
}: {
  column?: boolean
  centered?: boolean
  align?: 'baseline' | 'center' | 'end' | 'start' | 'stretch'
  justify?:
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'center'
    | 'end'
    | 'start'
  wrap?: boolean
  padding?: string
  margin?: string
  style?: CSS.Properties
  children?: ReactNode
  className?: string
}) => {
  const styles: CSS.Properties = {
    ...style,
    flexDirection: column ? 'column' : 'row',
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    
  }

  if (centered) {
    styles.alignItems = 'center'
    styles.justifyContent = 'center'
  }
  
  const wrapperClasses = classNames('FlexContainer', className)

  return (
    <div
      className={wrapperClasses}
      style={{ padding: padding, margin: margin, ...styles }}
    >
      {children}
    </div>
  )
}
