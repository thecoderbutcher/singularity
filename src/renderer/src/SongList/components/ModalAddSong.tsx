import Modal from '@renderer/components/Modal'
import { Song } from '@prisma/client'

interface AddSongModalProps {
  onClose: () => void
  onCreated: (song: Song) => void
}

export function AddSongModal({ onClose, onCreated }: AddSongModalProps): React.JSX.Element {
  onCreated = () => {}
  return (
    <Modal isOpen onClose={onClose} title="Agregar mp3" action="add">
      <form className="flex flex-col gap-4">
        <input type="file" name="file" id="file-input" accept="audio/mp3" required />

        <button
          className="bg-primary-dark/50 text-secondary border border-secondary/20 hover:bg-accent-dark rounded-md py-1 px-4 hover:scale-110 transition-all duration-300"
          onClick={onClose}
        >
          Cancel
        </button>
      </form>
    </Modal>
  )
}
