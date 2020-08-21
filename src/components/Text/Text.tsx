import React, { ReactNode } from 'react'
import './Text.scss'
import classNames from 'classnames'
import * as CSS from 'csstype'

export type TextColorType =
  | 'grey-heavy'
  | 'grey'
  | 'grey-light'
  | 'grey-extra-light'
  | 'white-heavy'
  | 'white'
  | 'white-light'
  | 'white-extra-light'
  | 'primary-heavy'
  | 'primary'
  | 'primary-light'
  | 'primary-extra-light'
  | 'secondary-heavy'
  | 'secondary'
  | 'secondary-light'
  | 'secondary-extra-light'
  | 'success-heavy'
  | 'success'
  | 'success-light'
  | 'success-extra-light'
  | 'warning-heavy'
  | 'warning'
  | 'warning-light'
  | 'warning-extra-light'
  | 'danger-heavy'
  | 'danger'
  | 'danger-light'
  | 'danger-extra-light'

export const Text = ({
  children,
  size = 'medium',
  // lightness = 'medium',
  weight = 'regular',
  color = 'grey',
  span = false,
  className,
  // overDarkBackground = false,
  style,
  maxWidth,
  textAlign,

  margin,
  noWrap,
}: {
  children?: ReactNode
  size?:
    | 'fine-print'
    | 'extra-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'extra-large'
  // lightness?: 'light' | 'medium' | 'dark'
  weight?: 'thin' | 'light' | 'regular' | 'bold'
  color?: TextColorType

  span?: boolean
  className?: string
  // overDarkBackground?: boolean
  style?: CSS.Properties
  maxWidth?: string
  textAlign?: CSS.TextAlignProperty
  margin?: string
  noWrap?: boolean
}) => {
  const sizeClass = `Text--size-${size}`
  const weightClass = `Text--weight-${weight}`
  const colorClass = `Text--color-${color}`

  const wrapperClasses = classNames(
    'Text',
    sizeClass,
    colorClass,
    // lightnessClass,
    weightClass,
    className,
    {
      'Text--no-wrap': noWrap,
    },
  )

  const styles = {
    maxWidth: maxWidth,
    margin: margin,
    textAlign: textAlign,
    ...style,
  }

  if (span) {
    return (
      <span style={styles} className={wrapperClasses}>
        {children}
      </span>
    )
  }
  return (
    <div style={styles} className={wrapperClasses}>
      {children}
    </div>
  )
}
