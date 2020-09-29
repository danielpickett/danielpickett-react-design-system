import chroma from 'chroma-js'
import React, { useEffect, useRef, useState } from 'react'
import './TextSample.scss'

export const TextSample = ({
  color,
  swatchRef,
}: {
  color: string
  swatchRef: React.RefObject<HTMLDivElement>
}) => {
  const textRef = useRef<HTMLDivElement>(null)

  const [contrast, setContrast] = useState('-')

  useEffect(() => {
    const interval = window.setInterval(
      (
        textRef: React.RefObject<HTMLDivElement>,
        swatchRef: React.RefObject<HTMLDivElement>,
      ) => {
        if (textRef.current && swatchRef.current) {
          const c1 = getComputedStyle(textRef.current, null).color || ''
          const c2 = getComputedStyle(swatchRef.current, null).backgroundColor

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
