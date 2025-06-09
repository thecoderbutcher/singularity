import { HiTrash } from 'react-icons/hi2'
import ModalDeletePlaylist from './ModalDeletePlaylist'
import { useState } from 'react'

function BtnDeletePlaylist(): React.JSX.Element {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200"
      >
        <HiTrash />
      </button>
      {showModal && <ModalDeletePlaylist onClose={() => setShowModal(false)} />}
    </>
  )
}

export default BtnDeletePlaylist
