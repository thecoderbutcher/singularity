import { useState } from 'react'
import { PiListPlusBold } from 'react-icons/pi'
import { CreatePlaylistModal } from './ModalAddPlaylist'

function BtnAddPlaylist(): React.JSX.Element {
  const [showModal, setShowModal] = useState(false)
  const handleAdd = (): void => setShowModal(true)

  return (
    <>
      <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
        <button onClick={handleAdd}>
          <PiListPlusBold />
        </button>
      </div>
      {showModal && <CreatePlaylistModal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default BtnAddPlaylist
