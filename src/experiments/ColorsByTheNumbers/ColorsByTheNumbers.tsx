import React from 'react'
import './ColorsByTheNumbers.scss'
import './light-theme-scss/_index.scss'
import { TextSwatch } from './components/TextSwatch'
import { TextColors } from './components'

const scales = ['grey', 'primary', 'success', 'warning', 'danger']

const washes = [
  '050',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
]

export const ColorsByTheNumbers = () => {
  return (
    <div className="ColorsByTheNumbers light-theme">
      <div className="ColorsByTheNumbers__labels">
        <div className="ColorsByTheNumbers__label" style={{ color: 'black' }}>
          white
        </div>

        {washes.map((wash, index) => (
          <div className="ColorsByTheNumbers__label" key={index}>
            {wash}
          </div>
        ))}
      </div>

      {scales.map((scaleName, index) => (
        <div style={{ display: 'flex' }} key={index}>
          <TextSwatch
            backgroundColor={`white`}
            render={(swNode) =>
              scaleName === 'grey' ? (
                scales.map((scale, index) => (
                  <TextColors
                    key={index}
                    swNode={swNode}
                    scale={scale}
                    on={'white'}
                  />
                ))
              ) : (
                <div>
                  <TextColors
                    key={index}
                    swNode={swNode}
                    scale={scaleName}
                    on={'white'}
                  />
                </div>
              )
            }
          />

          {washes.map((wash, index) => (
            <TextSwatch
              key={index}
              backgroundColor={`var(--color-${scaleName}-${wash})`}
              render={(swNode) =>
                scaleName === 'grey' ? (
                  scales.map((scaleName, index) => (
                    <TextColors
                      key={index}
                      swNode={swNode}
                      scale={scaleName}
                      on={'grey'}
                      wash={wash}
                    />
                  ))
                ) : (
                  <TextColors
                    key={index}
                    swNode={swNode}
                    scale={scaleName}
                    on={scaleName}
                    wash={wash}
                  />
                )
              }
            />
          ))}
        </div>
      ))}
    </div>
  )
}
