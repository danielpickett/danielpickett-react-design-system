import React from 'react'
import './BodyText.scss'
import classNames from 'classnames'
import * as CSS from 'csstype'

export const BodyText = ({
  children,
  size = 'medium',
  inline = false,
  className,
  style,
  maxWidth,
}: {
  children: string
  size?: 'fine' | 'extra-small' | 'small' | 'medium' | 'large'
  inline?: boolean
  className?: string
  style?: CSS.Properties
  maxWidth?: string
}) => {
  const sizeClass = ` BodyText--${size}`

  const wrapperClasses = classNames(' ', sizeClass, className)

  if (inline) {
    return (
      <span
        style={{ ...style, maxWidth: maxWidth }}
        className={'BodyText' + wrapperClasses}
      >
        {children}
      </span>
    )
  } else {
    return (
      <div
        style={{ ...style, maxWidth: maxWidth }}
        className={'BodyText' + wrapperClasses}
      >
        {children}
      </div>
    )
  }
}
