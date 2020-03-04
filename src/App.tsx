import React, { useState } from 'react'
import { NumberInput } from 'components'

export const App = () => {
  const [minNum, setMinNum] = useState(5)
  const [maxNum, setMaxNum] = useState(10)

  const handleUpdateMinNum = (val: number) => {
    setMinNum(val)
    console.log(val)
  }

  const handleUpdateMaxNum = (val: number) => {
    setMaxNum(val)
    console.log(val)
  }

  return (
    <div>
      <span>Donate between</span>{' '}
      <NumberInput
        onChange={handleUpdateMinNum}
        value={minNum}
        // max={7}
        // min={2}
      />{' '}
      <span>and</span>{' '}
      <NumberInput onChange={handleUpdateMaxNum} value={maxNum} />{' '}
      <span>ostriches</span>{' '}
    </div>
  )
}
