import React, { ReactNode } from 'react'
import './GridContainer.scss'
import * as CSS from 'csstype'
import classNames from 'classnames'

export const GridContainer = ({
  children,
  columns,
  gap,
  className,
  align,
  justify,
  style,
}: {
  children?: ReactNode
  columns?: number | string
  gap?: CSS.GapProperty<0>
  className?: string
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'end'
  style?: CSS.Properties
}) => {
  const wrapperClasses = classNames('GridContainer', className)

  const _columns =
    typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns

  const styles: CSS.Properties = {
    ...style,
    gridTemplateColumns: _columns,
  }
  if (gap) styles.gap = gap
  if (_columns) styles.gridTemplateColumns = _columns
  if (align) styles.alignItems = align
  if (justify) styles.justifyItems = justify

  return (
    <div className={wrapperClasses} style={styles}>
      {children}
    </div>
  )
}
