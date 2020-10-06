import React from 'react'
// import { TextBackgroundColorType } from './TextBackgroundColorType'
import './Text.scss'
import {TextPropsType} from './TextProps'
// import { availableTextColors } from './availableTextColors'


type FontWeightType = 'normal' | 'bolder' | 'lighter'

export const Text = ({
  children,
  size = 'm',
  weight,
  on,
  color,
}: TextPropsType) => {

  const _color = (() => {
    const _on = on.split('-')[0]
    if (color === undefined){
      if ( _on === 'primary') return 'primary'
      if ( _on === 'success') return 'success'
      if ( _on === 'warning') return 'warning'
      if ( _on === 'danger') return 'danger'
      return 'grey'
    }
    return color
  })()
  
  const style: {
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
    <div className="Text" style={style}>
      {children}
    </div>
  )
}
