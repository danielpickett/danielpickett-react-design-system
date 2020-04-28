import React, { useState } from 'react'
import { Select, ValueType } from '../components'

type MyOptionType = {
  label: string
  value: string
}

export const SelectShowcase = () => {
  const options = [
    { value: 'james', label: 'James' },
    { value: 'mary', label: 'Mary' },
    { value: 'michael', label: 'Michael' },
    { value: 'linda', label: 'Linda' },
    { value: 'robert', label: 'Robert' },
    { value: 'patricia', label: 'Patricia' },
  ]

  const [selectedOption, setSelectedOption] = useState<
    ValueType<MyOptionType>
  >()
  const handleChange = (value: ValueType<MyOptionType>) => {
    console.log('You selected: ', value)
    setSelectedOption(value as ValueType<MyOptionType>)
  }

  const getCurrentLabel = () => {
    if ((selectedOption as MyOptionType)?.label) {
      return (selectedOption as MyOptionType).label
    }
    if (Array.isArray(selectedOption)) {
      return selectedOption.map((option) => option.label).join(', ')
    }
    return null
  }

  return (
    <div className="SelectShowcase" style={{ maxWidth: '20rem' }}>
      <span>My name is {getCurrentLabel() || '...'}</span>
      <Select
        value={selectedOption}
        onChange={(value) => handleChange(value)}
        options={options}
        isClearable
      />
    </div>
  )
}
