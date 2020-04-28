import React, { ReactNode } from 'react'
import './Box.scss'
import classNames from 'classnames'
import * as CSS from 'csstype'

export const Box = ({
  children,
  padding= '1rem',
  className,
  style
}: {
  children?: ReactNode
  padding?: string
  className?: string
  style?: CSS.Properties
}) => {
  const wrapperClasses = classNames('Box', className)
  
  const styles = {
    padding: padding,
    ...style,
  }
  return <div className={wrapperClasses} style={styles}>{children}</div>
}
