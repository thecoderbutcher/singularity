import { useState } from 'react'
import Modal from '@renderer/components/Modal'
import { usePlaylists } from '@renderer/context/PlaylistContext/PlaylistHook'

interface CreatePlaylistModalProps {
  onClose: () => void
}

export function CreatePlaylistModal({ onClose }: CreatePlaylistModalProps): React.JSX.Element {
  const { playlistDispatch } = usePlaylists()
  const [name, setName] = useState('')

  const handleSave = async (): Promise<void> => {
    if (!name.trim()) {
      alert('Debe ingresar el nombre de la playlist')
      return
    }
    const playlist = await window.electron.ipcRenderer.invoke('playlist:create', name)
    playlistDispatch({ type: 'ADD_PLAYLISTS', payload: playlist })
    onClose()
  }

  return (
    <Modal isOpen onClose={onClose} title="Add new" action="add">
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
        className="w-full bg-secondary/80 text-primary py-1 rounded-md hover:bg-accent hover:text-secondary hover:scale-105 transition-all duration-200"
      >
        Agregar
      </button>
    </Modal>
  )
}
