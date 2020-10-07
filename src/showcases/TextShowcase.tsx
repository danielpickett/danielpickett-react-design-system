import React from 'react'
import { Text } from 'components'

export const TextShowcase = () => {
  const bg = 'primary-200'

  return (
    <div className="TextShowcase">
      <div
        style={{
          backgroundColor: `var(--color-${bg})`,
          display: 'inline-block',
          padding: '2rem',
        }}
      >
        <Text on={bg}>
          Sample text baz
        </Text>
        {/* <TestText on="primary-200" color="primary--subdued"></TestText> */}
      </div>
    </div>
  )
}

// interface CommonProps {
//   size?: 's' | 'm' | 'l'
// }

// interface OnPrimary200 {
//   on: 'primary-200'
//   color?: 'primary'
// }

// interface OnPrimary900 {
//   on: 'primary-900'
//   color?: 'primary' | 'primary--dangerously-subdued' | 'primary--subdued'
// }

// type Props = CommonProps & (OnPrimary200 | OnPrimary900)

// const TestText = ({ size, on, color }: Props) => {
//   return <div>hello</div>
// }
