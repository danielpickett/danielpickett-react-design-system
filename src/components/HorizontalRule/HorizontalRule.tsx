import React from 'react'
import './HorizontalRule.scss'

export const HorizontalRule = ({
  color = 'neutral',
}: {
  color?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error'
}) => {
 const style = {
   backgroundColor: color === 'neutral' ? 'var(--color-neutral-200)' :`var(--color-${color})`
 }

  return <div className="HorizontalRule" style={style}></div>
}
