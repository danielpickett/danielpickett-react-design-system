import React, { ReactNode } from 'react'
import './TextOld.scss'
import classNames from 'classnames'
import * as CSS from 'csstype'

export const TextOld = ({
  children,
  size = 'medium',
  lightness = 'medium',
  weight = 'regular',
  color = 'grey',
  span = false,
  className,
  overDarkBackground = false,
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
  lightness?: 'light' | 'medium' | 'dark'
  weight?: 'thin' | 'light' | 'regular' | 'bold'
  color?:
    | 'grey'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
  span?: boolean
  className?: string
  overDarkBackground?: boolean
  style?: CSS.Properties
  maxWidth?: string
  textAlign?: CSS.TextAlignProperty
  margin?: string
  noWrap?: boolean
}) => {
  const sizeClass = `Text--${size}-size`
  // const lightnessClass = `Text--${lightness}-lightness`
  const weightClass = `Text--${weight}-weight`

  const wrapperClasses = classNames(
    'TextOld',
    sizeClass,
    // lightnessClass,
    weightClass,
    className,
    {
      'TextOld--no-wrap': noWrap,
      'TextOld--on-dark': overDarkBackground,
    },
  )

  var calcPaletteColor = (lightness: 'light' | 'medium' | 'dark') => {
    return {
      light: `var(--color-${color}-400)`,
      medium: `var(--color-${color}-600)`,
      dark: `var(--color-${color}-900)`,
    }[lightness]
  }

  var calcOpacity = (lightness: 'light' | 'medium' | 'dark') => {
    return {
      light: `0.6`,
      medium: `1`,
      dark: `1`,
    }[lightness]
  }

  const styles = {
    color: overDarkBackground
      ? 'var(--color-white)'
      : calcPaletteColor(lightness),
    opacity: overDarkBackground ? calcOpacity(lightness) : 1,
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
