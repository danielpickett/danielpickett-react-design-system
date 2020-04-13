import React, { useState } from 'react'
import { Checkbox } from 'components'

export const CheckboxShowcase = () => {
  const [isEnchanted, setIsEnchanted] = useState(true)
  const [isCursed, setIsCursed] = useState(false)

  return (
    <div className="CheckboxShowcase">
      <p>Enchanted: {isEnchanted ? 'true' : 'false'}</p>
      <p>Cursed: {isCursed ? 'true' : 'false'}</p>
      <Checkbox
        checked={isEnchanted}
        onChange={(checked) => {
          setIsEnchanted(checked)
        }}
        label="Make enchanted"
      />
      <Checkbox
        checked={isCursed}
        onChange={(checked) => setIsCursed(checked)}
        label="Make cursed"
      />
    </div>
  )
}