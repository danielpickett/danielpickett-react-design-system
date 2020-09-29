import chroma from 'chroma-js'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import './TextSwatch.scss'

export const TextSwatch = ({
  backgroundColor,
  render,
}: {
  backgroundColor: string
  render: (swatchNode: React.RefObject<HTMLDivElement>) => ReactNode
}) => {
  const swatchRef = useRef<HTMLDivElement>(null)

  const [bgContrast, setBgContrast] = useState(0)
  const [lch, setLch] = useState([0, 0, 0])

  useEffect(() => {
    const interval = window.setInterval(
      (swatchRef: React.RefObject<HTMLDivElement>) => {
        if (swatchRef.current) {
          const gbColor = getComputedStyle(swatchRef.current, null)
            .backgroundColor
          setBgContrast(+chroma.contrast('white', gbColor).toFixed(2))
          setLch(chroma(gbColor).lch())
        }
      },
      500,
      swatchRef,
    )
    return () => {
      clearTimeout(interval)
    }
  })

  return (
    <div ref={swatchRef} className="TextSwatch" style={{ backgroundColor }}>
      <div
        className="TextSwatch__details"
        style={{
          color: bgContrast > 4 ? 'white' : 'black',
        }}
      >
        <span>{bgContrast}</span>
        <span>•</span>
        <span>L:{lch[0].toFixed(1)},</span>
        <span>C:{lch[1].toFixed(1)},</span>
        <span>H:{lch[2].toFixed(1)}</span>
      </div>
      {render(swatchRef)}
    </div>
  )
}
