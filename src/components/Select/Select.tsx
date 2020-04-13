import React from 'react'
import './Select.scss'
import ReactSelect, { Theme, Props } from 'react-select'

export const Select = ({
  ...rest
}: Props<{ value: string; label: string }>) => {
  const colors = {
    primary: 'var(--color-primary-500)',
    primary75: 'var(--color-primary-300)',
    primary50: 'var(--color-primary-100)',
    primary25: 'var(--color-primary-050)',

    danger: 'var(--color-error-500)',
    dangerLight: 'var(--color-error-100)',

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
      colors: { ...theme.colors, ...colors },
    }
  }

  return (
    <ReactSelect
      className="Select"
      classNamePrefix="Select"
      theme={updateTheme}
      {...rest}
    />
  )
}

export * from 'react-select'
