import React, { ReactNode } from 'react'
import './GridContainer.scss'
import * as CSS from 'csstype'
import classNames from 'classnames'

export const GridContainer = ({
  children,
  columns,
  gap,
  columnGap,
  rowGap,
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
  const wrapperClasses = classNames('GridContainer', className)

  const _columns =
    typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns

  console.log('columns', _columns)

  if ((gap && columnGap) || (gap && rowGap)) {
    throw new Error(
      `Do not use 'columnGap' and/or 'rowGap' alongside 'gap' because they will overwrite each other. For column or row gaps of different sizes, use 'columnGap' and 'rowGap' without 'gap' or use 'gap' with two units such as 'gap="1rem 2rem"'`,
    )
  }

  const styles = {
    ...style,
    columnGap: columnGap,
    rowGap: rowGap,
    gap: gap,
    gridTemplateColumns: _columns,
  }

  // console.log('gap',gap, styles.gap)
  // console.log('columnGap',columnGap, styles.columnGap)
  // console.log('columnGap',rowGap, styles.rowGap)

  console.log('styles', styles)

  return (
    <div className={wrapperClasses} style={styles}>
      {children}
    </div>
  )
}
