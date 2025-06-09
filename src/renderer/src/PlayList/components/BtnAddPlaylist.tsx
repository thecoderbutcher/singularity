import { useState } from 'react'
import { PiListPlusBold } from 'react-icons/pi'
import { CreatePlaylistModal } from './ModalAddPlaylist'
import { Playlist } from '@prisma/client'
import { usePlaylists } from '@renderer/context/PlaylistContext/PlaylistHook'

function BtnAddPlaylist(): React.JSX.Element {
  const { playlistDispatch } = usePlaylists()
  const [showModal, setShowModal] = useState(false)

  const handleAdd = (): void => setShowModal(true)

  const handleCreated = (newPlaylist: Playlist): void => {
    playlistDispatch({ type: 'ADD_PLAYLISTS', payload: newPlaylist })
  }
  return (
    <>
      <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
        <button onClick={handleAdd}>
          <PiListPlusBold />
        </button>
      </div>
      {showModal && (
        <CreatePlaylistModal onClose={() => setShowModal(false)} onCreated={handleCreated} />
      )}
    </>
  )
}

export default BtnAddPlaylist
