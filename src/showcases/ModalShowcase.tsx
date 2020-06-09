import React, { useState } from 'react'
import { Modal } from 'components'

export const ModalShowcase = () => {
  const [modalShowing, setModalShowing] = useState(false)
  const [modalNoBgShowing, setModalNoBgShowing] = useState(false)
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
      <button onClick={() => setModalNoBgShowing(true)}>Open Modal with no background</button>
      {modalNoBgShowing && (
        <Modal noBackground offClick={() => setModalNoBgShowing(false)}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '10rem',
              width: '10rem',
            }}
          >
            Hello from the modal!
          </div>
        </Modal>
      )}
    </div>
  )
}
