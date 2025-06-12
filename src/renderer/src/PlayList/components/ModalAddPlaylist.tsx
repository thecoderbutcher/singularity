import Modal from '@renderer/components/Modal'
import { useState } from 'react'
import { Playlist } from '@prisma/client'
import { usePlaylists } from '@renderer/context/PlaylistContext/PlaylistHook'

interface CreatePlaylistModalProps {
  onClose: () => void
}

export function CreatePlaylistModal({ onClose }: CreatePlaylistModalProps): React.JSX.Element {
  const { playlistDispatch } = usePlaylists()
  const [name, setName] = useState('')

  const handleSave = async (event: React.FormEvent): Promise<void> => {
    event?.preventDefault()

    if (!name.trim()) {
      alert('Debe ingresar el nombre de la playlist')
      return
    }

    const playlist: Playlist = await window.electron.ipcRenderer.invoke('playlist:create', name)
    playlistDispatch({ type: 'ADD_PLAYLISTS', payload: playlist })

    onClose()
  }

  return (
    <Modal isOpen onClose={onClose} title="Add new" action="add">
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Nombre de la lista"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-secondary/50 focus:outline-none rounded-md p-2 mb-4"
        />
        <button
          onClick={handleSave}
          className="bg-primary-dark/50 text-secondary border border-secondary/20 hover:bg-accent-dark rounded-md py-1 px-4 hover:scale-105 transition-all duration-200"
        >
          Agregar
        </button>
      </form>
    </Modal>
  )
}
