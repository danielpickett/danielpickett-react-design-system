import React, { useState } from 'react'
import Select, { ValueType, Theme } from 'react-select'

export const ReactSelectExample = () => {
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

  type MyOptionType = {
    label: string
    value: string
  }

  const handleChange = (value: ValueType<MyOptionType>) => {
    setSelectedOption(value as ValueType<MyOptionType>)
  }

  const getCurrentLabel = () => {
    if ((selectedOption as MyOptionType).label) {
      return (selectedOption as MyOptionType).label
    }
    if (Array.isArray(selectedOption)) {
      return selectedOption.map((option) => option.label).join(', ')
    }
    return null
  }

  const colors = {
    primary: 'var(--color-primary-500)',
    primary75: 'var(--color-primary-300)',
    primary50: 'var(--color-primary-100)',
    primary25: 'var(--color-primary-050)',

    danger: 'var(--color-danger-500)',
    dangerLight: 'var(--color-danger-100)',

    neutral0: 'white',
    neutral5: 'var(--color-primary-050)',
    neutral10: 'var(--color-primary-100)',
    neutral20: 'var(--color-primary-200)',
    neutral30: 'var(--color-primary-300)',
    neutral40: 'var(--color-primary-400)',
    neutral50: 'var(--color-primary-500)',
    neutral60: 'var(--color-primary-600)',
    neutral70: 'var(--color-primary-700)',
    neutral80: 'var(--color-primary-800)',
    neutral90: 'var(--color-primary-900)',
  }

  const updateTheme = (theme: Theme) => {
    return {
      ...theme,
      colors: colors,
    }
  }

  return (
    <div style={{ maxWidth: '30rem', margin: '5rem auto' }}>
      <p>My favorite is {getCurrentLabel() || '...'}</p>
      <Select
        className="Select"
        value={selectedOption}
        classNamePrefix="Select"
        onChange={(value) => handleChange(value)}
        options={options}
        theme={updateTheme}
        isMulti
      />
    </div>
  )
}
