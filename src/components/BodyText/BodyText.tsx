import React from 'react'
import './BodyText.scss'
import classNames from 'classnames'
import * as CSS from 'csstype'

export const BodyText = ({
  children,
  size = 'medium',
  lightness = 'medium',
  inline = false,
  className,
  style,
  maxWidth,
  margin,
}: {
  children: string
  size?: 'fine-print' | 'extra-small' | 'small' | 'medium' | 'large'
  lightness?: 'extra-light' | 'light' | 'medium' | 'dark'
  inline?: boolean
  className?: string
  style?: CSS.Properties
  maxWidth?: string
  margin?: string
}) => {
  const sizeClass = ` BodyText--${size}-size`
  const lightnessClass = `BodyText--${lightness}-lightness`

  const wrapperClasses = classNames(
    'BodyText',
    sizeClass,
    lightnessClass,
    className,
  )

  const styles = {
    ...style,
    maxWidth: maxWidth,
    margin: margin,
  }

  if (inline) {
    return (
      <span style={styles} className={wrapperClasses}>
        {children}
      </span>
    )
  } else {
    return (
      <div style={styles} className={wrapperClasses}>
        {children}
      </div>
    )
  }
}
