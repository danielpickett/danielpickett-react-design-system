import React from 'react'
import { LabeledValue } from 'components'

export const LabeledValueShowcase = () => {
  return (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <LabeledValue label="label" value="value" />
      <LabeledValue
        label="Budget"
        value="1000"
        prefix="$"
        onClick={(e) => console.log('clicked', e)}
      />
      <LabeledValue
        label="CTR"
        value="99"
        suffix="%"
        onClick={(e) => console.log('clicked', e)}
      />
    </div>
  )
}
