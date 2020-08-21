import React from 'react'
import { Text, FlexContainer, TextColorType } from 'components'

type ColorsType =
  | 'grey'
  | 'white'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'

const Lightnesses = ({ color }: { color: ColorsType }) => {
  return (
    <div>
      {['heavy', '', 'light', 'extra-light'].map((lightness) => {
        return (
          <Text
            color={
              `${color}${lightness ? '-' + lightness : ''}` as TextColorType
            }
          >
            Lorem ipsum dolor sit amet.
          </Text>
        )
      })}
    </div>
  )
}

const colorBgStyle = {
  margin: '1rem',
  padding: '1rem',
}

export const TextShowcase = () => {
  return (
    <div className="TextShowcase">
      <FlexContainer>
        {([
          'grey',
          // 'white',
          'primary',
          'secondary',
          'success',
          'warning',
          'danger',
        ] as ColorsType[]).map((color) => (
          <div>
            <div
              style={{
                ...colorBgStyle,
                backgroundColor: `var(--color-${color})`,
              }}
            >
              <Lightnesses color={'white'} />
            </div>
            <div
              style={{
                ...colorBgStyle,
                backgroundColor: `var(--color-${color}-100)`,
              }}
            >
              <Lightnesses color={color} />
            </div>
            <div
              style={{
                ...colorBgStyle,
                backgroundColor: `var(--color-${color}-050)`,
              }}
            >
              <Lightnesses color={color} />
            </div>
            <div style={colorBgStyle}>
              <Lightnesses color={color} />
            </div>
          </div>
        ))}
      </FlexContainer>
    </div>
  )
}
