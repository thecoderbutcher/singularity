import Modal from '@renderer/components/Modal'
import { usePlaylists } from '@renderer/context/PlaylistContext/PlaylistHook'
import { useSongs } from '@renderer/context/SongContext/SongHook'
import { useState } from 'react'
import { Song } from '@prisma/client'

interface AddSongModalProps {
  onClose: () => void
}

export function AddSongModal({ onClose }: AddSongModalProps): React.JSX.Element {
  const [audioSrc, setAudioSrc] = useState<string | null>(null)
  const [fileSrc, setFileSrc] = useState<string | null>(null)
  const [metadata, setMetadata] = useState(null)
  const { playlistState } = usePlaylists()
  const { songDispatch } = useSongs()

  const handleFileChange = async (): Promise<void> => {
    const filePath = await window.electronAPI.openFile()
    console.log(filePath)
    if (filePath) {
      const audioURL = await window.electronAPI.getAudioPreview(filePath)
      const meta = await window.electronAPI.readMetadata(filePath)
      setAudioSrc(audioURL as string)
      setMetadata(meta)
      setFileSrc(filePath)
    }
  }

  const handleSave = async (): Promise<void> => {
    if (!metadata || !audioSrc || !playlistState.playlistSelected) return
    const data = {
      playlistId: playlistState.playlistSelected?.id,
      title: metadata.title || 'Titulo desconocido',
      artist: metadata.artist || 'Artista desconocido',
      album: metadata.album || 'Album desconocido',
      duration: metadata.duration || 0
    }
    const song: Song = await window.electron.ipcRenderer.invoke(
      'song:add',
      data.playlistId,
      data.title,
      data.artist,
      data.album,
      data.duration,
      fileSrc
    )
    songDispatch({ type: 'ADD_SONGS', payload: song })
    onClose()
  }
  return (
    <Modal isOpen onClose={onClose} title="Agregar mp3" action="add">
      <div className="flex flex-col w-full gap-4">
        <button onClick={handleFileChange}>Seleccione archivo</button>
        {audioSrc && (
          <div className="flex flex-col gap-4 mt-4">
            <audio controls src={audioSrc} className="w-full ">
              Does not support the audio element.
            </audio>
          </div>
        )}
        <button
          className="bg-primary-dark/50 text-secondary border border-secondary/20 hover:bg-accent-dark rounded-md py-1 px-4 hover:scale-105 transition-all duration-200"
          onClick={handleSave}
        >
          Agregar
        </button>
      </div>
    </Modal>
  )
}
