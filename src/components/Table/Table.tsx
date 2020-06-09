import React, { ReactNode } from 'react'
import './Table.scss'

export const Table = ({children}:{children: ReactNode}) => {
  return (
    <table className="Table">
      {children}
    </table>
  )
}