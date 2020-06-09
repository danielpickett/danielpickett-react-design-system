import React, { useState } from 'react'
import { Modal } from 'components'

export const ModalShowcase = () => {
  const [modalShowing, setModalShowing] = useState(false)
  return (
    <div className="ModalShowcase">
      <button onClick={() => setModalShowing(true)}>Open Modal</button>
      {modalShowing && (
        <Modal offClick={() => setModalShowing(false)}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              height: '30rem',
              width: '50rem',
            }}
          >
            Hello from the modal!
          </div>
        </Modal>
      )}
    </div>
  )
}
