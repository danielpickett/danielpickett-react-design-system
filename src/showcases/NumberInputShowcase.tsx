import React, { useState } from 'react'
import { NumberInput } from 'components'

export const NumberInputShowcase = () => {
  const [number, setNumber] = useState<number>(0)
  return (
    <div className="NumberInputShowcase">
      <NumberInput value={number} onChange={(v) => setNumber(v)} />
    </div>
  )
}