import React, { ReactNode } from 'react'
import './GridContainer.scss'
import * as CSS from 'csstype'

export const GridContainer = ({
  children,
  columns,
  gap,
  columnGap,
  className,
  style,
}: {
  children: ReactNode
  columns: number | string
  gap?: string
  columnGap?: string
  rowGap?: string
  className?: string
  style?: CSS.Properties
}) => {
  const _columns = typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns

  console.log('columns', _columns)

  const styles = {
    ...style,
    gap: gap,
    gridTemplateColumns: _columns,
  }

  return <div className="GridContainer" style={styles}>{children}</div>
}
