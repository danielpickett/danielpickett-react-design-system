import React from 'react'
import './Text.scss'
import classNames from 'classnames'
import * as CSS from 'csstype'

export const Text = ({
  children,
  size = 'medium',
  lightness = 'medium',
  weight = 'regular',
  span = false,
  className,
  overDarkBackground = false,
  style,
  maxWidth,
  margin,
  noWrap,
}: {
  children: string | string[]
  size?:
    | 'fine-print'
    | 'extra-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'extra-large'
  lightness?: 'extra-light' | 'light' | 'medium' | 'dark'
  weight?: 'thin' | 'light' | 'regular' | 'bold'
  span?: boolean
  className?: string
  overDarkBackground?: boolean
  style?: CSS.Properties
  maxWidth?: string
  margin?: string
  noWrap?: boolean
}) => {
  const sizeClass = ` Text--${size}-size`
  const lightnessClass = `Text--${lightness}-lightness`
  const weightClass = `Text--${weight}-weight`

  const wrapperClasses = classNames(
    'Text',
    sizeClass,
    lightnessClass,
    weightClass,
    className,
    { 'Text--no-wrap': noWrap, 'Text--on-dark': overDarkBackground },
  )

  const styles = {
    ...style,
    maxWidth: maxWidth,
    margin: margin,
  }

  if (span) {
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
