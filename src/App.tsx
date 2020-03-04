import React, { useState } from 'react'
import { NumberInput } from 'components'

export const App = () => {
  const [number1, setNumber1] = useState(5)
  const [number2, setNumber2] = useState(10)

  const handleOnChange1 = (val: number) => {
    setNumber1(val)
    console.log(val)
  }

  const handleOnChange2 = (val: number) => {
    setNumber2(val)
    console.log(val)
  }

  return (
    <div>
      <span>Donate between</span>{' '}
      <NumberInput onChange={handleOnChange1} value={number1} />{' '}
      <span>and</span>{' '}
      <NumberInput onChange={handleOnChange2} value={number2} />{' '}
      <span>ostrich prides</span>{' '}
    </div>
  )
}
