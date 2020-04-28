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
      colors: { ...theme.colors, ...colors },
    }
  }

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      borderWidth: 'var(--border-width-default)',
      borderColor:'var(--color-primary)'
      // You can also use state.isFocused to conditionally style based on the focus state
    }),
  }

  return (
    <ReactSelect
      className="Select"
      classNamePrefix="Select"
      theme={updateTheme}
      styles={customStyles}
      {...rest}
    />
  )
}

export * from 'react-select'
