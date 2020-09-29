import React, { ReactNode, useEffect, useRef, useState } from 'react'
import './ThemeSamples.scss'
import chroma from 'chroma-js'

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

const Swatch = ({
  backgroundColor,
  render,
}: {
  backgroundColor: string
  render: (swatchNode: React.RefObject<HTMLDivElement>) => ReactNode
}) => {
  const swatchRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={swatchRef}
      className="ThemeSamples__swatch"
      style={{ backgroundColor }}
    >
      {render(swatchRef)}
    </div>
  )
}

const Text = ({
  color,
  swatchRef,
}: {
  color: string
  swatchRef: React.RefObject<HTMLDivElement>
}) => {
  const textRef = useRef<HTMLDivElement>(null)

  const [contrast, setContrast] = useState('-')
  const [bgContrast, setBgContrast] = useState(0)
  const [lch, setLch] = useState([0, 0, 0])

  useEffect(() => {
    const interval = window.setInterval(
      (
        textRef: React.RefObject<HTMLDivElement>,
        swatchRef: React.RefObject<HTMLDivElement>,
      ) => {
        if (textRef.current && swatchRef.current) {
          const c1 = getComputedStyle(textRef.current, null).color || ''
          const c2 = getComputedStyle(swatchRef.current, null).backgroundColor
          setBgContrast(+chroma.contrast('white', c2).toFixed(2))
          setLch(chroma(c2).lch())

          const _contrast = +chroma.contrast(c1, c2).toFixed(2)
          const rating = _contrast < 4.5 ? ' ✕' : ' ✓'
          setContrast(_contrast + rating)
        }
      },
      500,
      textRef,
      swatchRef,
    )
    return () => {
      clearTimeout(interval)
    }
  })

  return (
    <>
      <div
        className="ThemeSamples__swatch-contrast"
        style={{
          color: bgContrast > 4 ? 'white' : 'black',
        }}
      >
        <div>{bgContrast}</div>
        <div>
          <span>L:{lch[0].toFixed(1)},</span>
          <span>C:{lch[1].toFixed(1)},</span>
          <span>H:{lch[2].toFixed(1)}</span>
        </div>
      </div>
      <div
        style={{
          color: `var(--${color})`,
          fontSize: '1rem',
          marginLeft: '0.5rem',
        }}
        ref={textRef}
        title={color}
      >
        {'Sample • ' + contrast}
      </div>
    </>
  )
}

export const ThemeSamples = () => {
  return (
    <div className="ThemeSamples">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${washes.length + 1}, 1fr)`,
        }}
      >
        <div style={{ color: 'black' }}>white</div>
        {washes.map((wash, index) => (
          <div style={{ color: 'black' }} key={index}>
            {wash}
          </div>
        ))}
      </div>
      {scales.map((scaleName, index) => (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${washes.length + 1}, 1fr)`,
          }}
          key={index}
        >
          <Swatch
            backgroundColor={`white`}
            render={(swNode) => (
              <>
                <Text
                  swatchRef={swNode}
                  color={`text-color-${scaleName}-regular-on-white`}
                />
                <Text
                  swatchRef={swNode}
                  color={`text-color-${scaleName}-subdued-on-white`}
                />
                <Text
                  swatchRef={swNode}
                  color={`text-color-${scaleName}-dangerously-subdued-on-white`}
                />
              </>
            )}
          />

          {washes.map((wash, index) => (
            <Swatch
              key={index}
              backgroundColor={`var(--color-${scaleName}-${wash})`}
              render={(swNode) => (
                <>
                  <Text
                    swatchRef={swNode}
                    color={`text-color-${scaleName}-regular-on-${scaleName}-${wash}`}
                  />
                  <Text
                    swatchRef={swNode}
                    color={`text-color-${scaleName}-subdued-on-${scaleName}-${wash}`}
                  />
                  <Text
                    swatchRef={swNode}
                    color={`text-color-${scaleName}-dangerously-subdued-on-${scaleName}-${wash}`}
                  />
                </>
              )}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
