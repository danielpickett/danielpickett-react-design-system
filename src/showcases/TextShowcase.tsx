import React from 'react'
import { Text } from 'components'
// import { FlexContainer } from 'components'




export const TextShowcase = () => {
  // const sizes = ['xxxl', 'xxl', 'xl', 'l', 'm', 's', 'xs'] as const
  // const kinds = [undefined, 'subdued', 'dangerously-subdued'] as const
  // const colors = ['grey', 'primary', 'success', 'warning', 'danger'] as const
  // const weights = ['bold', 'normal', 'light'] as const

  const bg = 'grey-200'

  return (
    <div className="TextShowcase">

      <div style={{backgroundColor: `var(--color-${bg})`, display: 'inline-block', padding: '2rem' }}>
        <Text on={bg}>Sample text baz</Text>
      </div>
    </div>

    //<div className="TextShowcase">
    //   <FlexContainer style={{ gap: '3rem' }}>
    //     <div>
    //       {sizes.map((size, index) => (
    //         <Text key={index} on="white" size={size}>
    //           Sample Text
    //         </Text>
    //       ))}
    //     </div>

    //     <div>
    //       {kinds.map((kind, index) => (
    //         <Text key={index} on="white" kind={kind}>
    //           Sample Text
    //         </Text>
    //       ))}
    //     </div>

    //     <div>
    //       {colors.map((color, index) => (
    //         <Text key={index} on="white" color={color}>
    //           Sample Text
    //         </Text>
    //       ))}
    //     </div>

    //     <div>
    //       {weights.map((weight, index) => (
    //         <Text key={index} on="white" weight={weight}>
    //           Sample Text
    //         </Text>
    //       ))}
    //     </div>
    //   </FlexContainer>
    //   <FlexContainer margin="5rem 0 0 0">
        
    //     <div>
    //       {weights.map((weight, index) => (
    //         <Text key={index} on="white" weight={weight}>
    //           Sample Text
    //         </Text>
    //       ))}
    //     </div>
    //   </FlexContainer>
    //</div>
  )
}
