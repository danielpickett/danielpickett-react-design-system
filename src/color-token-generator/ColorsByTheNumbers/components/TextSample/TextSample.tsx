import chroma from 'chroma-js'
import { DeprecatedTooltip } from 'components'
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
  const [contrast, setContrast] = useState<string | null>(null)

  useEffect(() => {
    const interval = window.setInterval(
      (
        textRef: React.RefObject<HTMLDivElement>,
        swatchRef: React.RefObject<HTMLDivElement>,
      ) => {
        if (textRef.current && swatchRef.current) {
          const c1 = getComputedStyle(textRef.current, null).color || ''
          if (c1 === 'rgba(0, 0, 0, 0)') {
            return
          }
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

  const [tooltipActive, setTooltipActive] = useState(false)

  return (
    <div
      className="TextSample"
      onClick={() => setTooltipActive(!tooltipActive)}
      style={{
        color: `var(--${color})`,
      }}
      ref={textRef}
    >
      <DeprecatedTooltip
        isActive={tooltipActive}
        deactivate={() => setTooltipActive(false)}
        closeOnClickOutside
        trigger={
          <div className="TextSample__sample">{'Sample • ' + contrast}</div>
        }
        tooltipContent={contrast ? color : 'not available'}
      />
    </div>
  )
}
