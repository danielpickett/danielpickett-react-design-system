import React, { ReactNode } from 'react'
import './GridContainer.scss'
import * as CSS from 'csstype'
import classNames from 'classnames'

export const GridContainer = ({
  children,
  columns,
  gap,
  className,
  style,
}: {
  children: ReactNode
  columns: number | string
  gap?: string
  className?: string
  style?: CSS.Properties
}) => {
  const wrapperClasses = classNames('GridContainer', className)

  const _columns =
    typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns


  const styles = {
    ...style,
    gap: gap,
    gridTemplateColumns: _columns,
  }

  return (
    <div className={wrapperClasses} style={styles}>
      {children}
    </div>
  )
}
