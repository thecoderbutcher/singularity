import { PiMusicNotesPlusFill } from 'react-icons/pi'
import { AddSongModal } from './ModalAddSong'
import { useState } from 'react'

function BtnAddSong(): React.JSX.Element {
  const [showModal, setShowModal] = useState(false)
  const addsong = (): void => setShowModal(true)
  return (
    <>
      <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
        <button onClick={addsong}>
          <PiMusicNotesPlusFill />
        </button>
      </div>
      {showModal && <AddSongModal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default BtnAddSong
