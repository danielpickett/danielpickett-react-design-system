import React from 'react'
// import { TextBackgroundColorType } from './TextBackgroundColorType'
import './Text.scss'
import { TextPropsType } from './TextProps'
// import { availableTextColors } from './availableTextColors'

type FontWeightType = 'normal' | 'bolder' | 'lighter'

export const Text = ({
  children,
  size = 'm',
  weight,
  on,
  color,
  UNSAFE_style,
  UNSAFE_className,
}: TextPropsType) => {
  const _color = (() => {
    if (color === undefined) {
      const _on = on?.split('-')[0] || 'grey'
      if (_on === 'primary') return 'primary'
      if (_on === 'success') return 'success'
      if (_on === 'warning') return 'warning'
      if (_on === 'danger') return 'danger'
      return 'grey'
    }
    return color
  })()

  const _style: {
    fontSize: string
    color: string
    fontWeight: FontWeightType
  } = {
    fontSize: 'var(--text-size-' + size + ')',
    color: `var(--text-on-${on}--color-${_color})`,
    fontWeight: (weight
      ? `var(--text-weight-${weight})`
      : undefined) as FontWeightType,
  }

  return (
    <div
      className={'Text' + (UNSAFE_className ? ' ' + UNSAFE_className : '')}
      style={{ ..._style, ...UNSAFE_style }}
    >
      {children}
    </div>
  )
}
