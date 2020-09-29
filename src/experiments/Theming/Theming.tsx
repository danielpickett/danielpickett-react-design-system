import React from 'react'
import './light-theme-scss/index.scss'
import './Theming.scss'
import { ThemeSamples } from 'experiments/components'

export const Theming = () => {
  return (
    <div className="Theming">
      <div className="Theming__theme light-theme">
        <ThemeSamples />
      </div>
    </div>
  )
}
