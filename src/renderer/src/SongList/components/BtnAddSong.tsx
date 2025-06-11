import { AddSongModal } from './ModalAddSong'
import { useState } from 'react'

import { PiMusicNotesPlusFill } from 'react-icons/pi'

function BtnAddSong(): React.JSX.Element {
  const [showModal, setShowModal] = useState(false)
  const addsong = (): void => {
    setShowModal(true)
  }
  return (
    <>
      <button
        onClick={addsong}
        className="border border-accent/80 text-accent px-2 py-1 rounded-md hover:bg-accent hover:text-primary hover:scale-125 transition-all duration-200"
      >
        <PiMusicNotesPlusFill />
      </button>
      {showModal && <AddSongModal onClose={() => setShowModal(false)} onCreated={() => {}} />}
    </>
  )
}

export default BtnAddSong
