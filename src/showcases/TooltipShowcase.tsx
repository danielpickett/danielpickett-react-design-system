import React from 'react'
import { Tooltip } from 'components'

// const Spacers = ({ x = 10 }: { x?: number }) => (
//   <>
//     {[...Array(x)].map((e, i) => (
//       <div style={{ margin: '2rem 0' }} key={i}>
//         •
//       </div>
//     ))}
//   </>
// )

const RefComponent = React.forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div
    ref={ref}
    style={{
      padding: '.5rem 1rem',
      backgroundColor: 'var(--color-primary-100)',
      textAlign: 'center',
      width: 'max-content',
    }}
  >
    Component with ref
  </div>
))

export const TooltipShowcase = () => {
  return (
    <div
      className="TooltipShowcase"
      style={{
        width: '200vw',
        height: '210vh',
        overflow: 'scroll',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Tooltip
        content={
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              veritatis repellendus unde!
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione ullam suscipit culpa ab alias recusandae expedita id, iure praesentium.
          </p>
          </div>
        }
      >
        <RefComponent />
      </Tooltip>
    </div>
  )
}
