import React, { useState, ChangeEvent } from 'react'
import './ColorShowcase.scss'



export const ColorShowcase = () => {
  const [isGreyScale, setIsGreyScale] = useState(false)
  const handleSetIsGreyScale = (event: ChangeEvent<HTMLInputElement>) => {
    setIsGreyScale(event.currentTarget.checked)
  }

  const colors = [
    'label',
    'primary',
    'secondary',
    'grey',
    'grey-alpha',
    'success',
    'warning',
    'danger',
  ]
  
  const scale = [
    '900',
    '800',
    '700',
    '600',
    '500',
    '400',
    '300',
    '200',
    '100',
    '050',
  ]

  return (
    <div className="Swatches" style={{filter: isGreyScale ? 'grayscale(100)' : undefined}}>
      {colors.map((color, i) => (
        <div className="Swatches__row" key={i}>
          <div className="Swatches__row-label">
            {color !== 'label' ? color : ''}
          </div>
          {scale.map((lightness, j) =>
            color === 'label' ? (
              <div className="Swatches__column-label" key={j}>{lightness}</div>
            ) : (
              <div
                className={`Swatches__swatch Swatches__swatch--color-${color}-${lightness}`}
                key={j}
              />
            )
          )}
        </div>
      ))}
      <div className="Swatches__checkbox">
        <label>
          <input type="checkbox" checked={isGreyScale} onChange={handleSetIsGreyScale}/> 
          greyscale
        </label>
      </div>
    </div>
  )
}
