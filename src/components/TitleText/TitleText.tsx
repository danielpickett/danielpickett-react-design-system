import React from 'react'
import './TitleText.scss'
import classNames from 'classnames'
import * as CSS from 'csstype'

export const TitleText = ({
  children,
  size = 'medium',
  lightness = 'medium',
  className,
  style,
  maxWidth,
  margin,
}: {
  children: string
  size?:
    | 'fine-print'
    | 'extra-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'extra-large'
  lightness?: 'extra-light' | 'light' | 'medium' | 'dark'
  className?: string
  style?: CSS.Properties
  maxWidth?: string
  margin?: string
}) => {
  const sizeClass = `TitleText--${size}-size`
  const lightnessClass = `TitleText--${lightness}-lightness`

  const wrapperClasses = classNames(
    'TitleText',
    sizeClass,
    lightnessClass,
    className,
  )

  const styles = {
    ...style,
    maxWidth: maxWidth,
    margin: margin,
  }

  return (
    <div className={wrapperClasses} style={styles}>
      {children}
    </div>
  )
}
