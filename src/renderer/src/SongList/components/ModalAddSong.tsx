import Modal from '@renderer/components/Modal'
import { useState } from 'react'

interface AddSongModalProps {
  onClose: () => void
}

export function AddSongModal({ onClose }: AddSongModalProps): React.JSX.Element {
  const [audioSrc, setAudioSrc] = useState<string | null>(null)

  const handleFileChange = async (): Promise<void> => {
    const file = await window.electronAPI.openFile()
    if (file) {
      const audioURL = await window.electronAPI.getAudioPreview(file)
      setAudioSrc(audioURL as string)
    }
  }

  const handleSave = (): void => {}
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
          type="submit"
          onClick={handleSave}
        >
          Agregar
        </button>
      </div>
    </Modal>
  )
}
