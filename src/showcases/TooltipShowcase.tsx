import React from 'react'
import { Tooltip } from 'components'

const Spacers = ({ x = 10 }: { x?: number }) => (
  <>
    {[...Array(x)].map((e, i) => (
      <div style={{ margin: '2rem 0' }} key={i}>
        •
      </div>
    ))}
  </>
)
export const TooltipShowcase = () => {
  return (
    <div className="TooltipShowcase">
      <Spacers x={10} />
      <p>Hello from the TooltipShowcase component</p>
      <div style={{ display: 'flex', justifyContent: undefined }}>
        <Tooltip content="This is tooltip content">This has a tooltip</Tooltip>
      </div>
      <Spacers x={20} />
    </div>
  )
}
