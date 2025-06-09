import { Playlist } from '@prisma/client'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

interface CreatePlaylistModalProps {
  onClose: () => void
  onCreated: (playlist: Playlist) => void
}

export function CreatePlaylistModal({
  onClose,
  onCreated
}: CreatePlaylistModalProps): React.JSX.Element {
  const [name, setName] = useState('')

  const handleSave = async (): Promise<void> => {
    if (!name.trim()) {
      alert('Debe ingresar el nombre de la playlist')
      return
    }
    const playlist = await window.electron.ipcRenderer.invoke('playlist:create', name)
    onCreated(playlist)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-primary/80 p-4 rounded-md w-[300px] shadow-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">Nueva lista</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">
            <IoClose className="text-2xl" />
          </button>
        </div>
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
          className="bg-accent-dark text-secondary font-semibold px-4 py-2 rounded-md w-full"
        >
          Agregar
        </button>
      </div>
    </div>
  )
}
